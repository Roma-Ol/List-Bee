import {useCallback, useState} from "react";
import ListItem from "../list-item/listItem";
import AddTodo from "../add-item/add-todo";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

const testState = [
    {uid: 1, title: 'dog', key: 1, isActive: true},
    {uid: 2, title: 'cat', key: 2, isActive: true},
    {uid: 3, title: 'fish', key: 3, isActive: true},
    {uid: 4, title: 'hamster', key: 4, isActive: true},
]

const ListCard = () => {
    // Open & close card settings identifier.
    const [isOpened, setOppositeVal] = useState(false);

    // All the todos of this card.
    const [todos, setTodos] = useState(testState);

    // @todo remove that func.
    const updateTodoList = (newTodo) => {
        setTodos((todos) => newTodo);
    }

    const moveTodoListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = todos[dragIndex]
            const hoverItem = todos[hoverIndex]

            // Swap places of dragItem and hoverItem in the pets array
            setTodos(todos => {
                const updatedTodo = [...todos]
                updatedTodo[dragIndex] = hoverItem
                updatedTodo[hoverIndex] = dragItem
                return updatedTodo
            })
        },
        [todos],
    )

    // Make inactive.
    const makeInactive = (keyIndex) => {
        const newState = [...todos];

        const a = newState.find(function (item) {
            return item.uid === keyIndex;
        });

        newState[newState.indexOf(a)].isActive = !newState[newState.indexOf(a)].isActive;
        setTodos(newState);
    }

    return (
        <div className='card__body'>
            {/*<div className="list__card__actions">*/}
            {/*    <Fab variant="extended"*/}
            {/*         size="small"*/}
            {/*         color="primary"*/}
            {/*         aria-label="add"*/}
            {/*         onClick={() => {*/}
            {/*             setOppositeVal(isOpened === false)*/}
            {/*         }}>*/}
            {/*        Actions*/}
            {/*        <MenuIcon/>*/}
            {/*    </Fab>*/}

            {/*    {isOpened ?*/}
            {/*        <div className="list__card__quick-actions">*/}
            {/*            <ButtonGroup*/}
            {/*                orientation="vertical"*/}
            {/*                aria-label="vertical outlined button group">*/}
            {/*                <Button key="one">Delete</Button>*/}
            {/*                <Button key="two">Add row (left)</Button>*/}
            {/*                <Button key="three">Add row (right)</Button>*/}
            {/*            </ButtonGroup>*/}
            {/*        </div>*/}
            {/*        :*/}
            {/*        null}*/}
            {/*</div>*/}

            <DndProvider backend={HTML5Backend}>
                <ul className='todo-list__active'>
                    <h4>Active tasks</h4>
                    {todos.filter(item => item.isActive)
                        .map((item, index) => (
                            <ListItem key={item.uid}
                                      identifier={item.uid}
                                      index={index}
                                      title={item.title}
                                      makeInactive={makeInactive}
                                      moveListItem={moveTodoListItem}/>
                        ))}
                </ul>

                <ul className='todo-list__inactive'>
                    <h4>Finished tasks</h4>
                    {todos.filter(item => !item.isActive)
                        .map((item, index) => (
                            <ListItem key={item.uid}
                                      index={index}
                                      title={item.title}
                                      makeInactive={makeInactive}
                                      moveListItem={moveTodoListItem}/>
                        ))}
                </ul>
            </DndProvider>

            <AddTodo currentState={todos}
                     updateTodoList={updateTodoList}/>
        </div>
    )
}

export default ListCard;