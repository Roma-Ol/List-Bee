import {Button, ButtonGroup, Fab, TextField} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useCallback, useState} from "react";
import ListItem from "./listItem";
import CardContent from "./card-content";
import AddTodo from "./add-todo";
import DeleteIcon from "@mui/icons-material/Delete";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

const testState = [
    {uid: 1, title: 'dog', key: 1},
    {uid: 2, title: 'cat', key: 2},
    {uid: 3, title: 'fish', key: 3},
    {uid: 4, title: 'hamster', key: 4},
]

const ListCard = () => {
    // Open & close card settings identifier.
    const [isOpened, setOppositeVal] = useState(false);

    // All the todos of this card.
    const [todos, setTodos] = useState(testState);

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

    return (
        <div className='list__card'>
            <div className="list__card__actions">
                <Fab variant="extended"
                     size="small"
                     color="primary"
                     aria-label="add"
                     onClick={() => {
                         setOppositeVal(isOpened === false)
                     }}>
                    Actions
                    <MenuIcon/>
                </Fab>

                {isOpened ?
                    <div className="list__card__quick-actions">
                        <ButtonGroup
                            orientation="vertical"
                            aria-label="vertical outlined button group">
                            <Button key="one">Delete</Button>
                            <Button key="two">Add row (left)</Button>
                            <Button key="three">Add row (right)</Button>
                        </ButtonGroup>
                    </div>
                    :
                    null}
            </div>

            <DndProvider backend={HTML5Backend} >
                {todos.map((item, index) => (
                    <div className='rte'>
                        <ListItem
                            key={item.uid}
                            index={index}
                            title={item.title}
                            moveListItem={moveTodoListItem}/>
                    </div>

                ))}
            </DndProvider>

            <div className="list__card__add-todo">
                <AddTodo currentState={todos}
                         updateTodoList={updateTodoList}/>
            </div>
        </div>
    )
}

export default ListCard;