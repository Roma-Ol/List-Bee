import {useCallback, useState} from "react";
import ListItem from "../list-item/listItem";
import AddTodo from "../add-item/add-todo";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

const testState = [
    {uid: 1, title: 'dog', key: 1, isActive: true},
    {uid: 2, title: 'cat', key: 2, isActive: true},
    {uid: 3, title: 'fish', key: 3, isActive: true},
    {uid: 4, title: 'hamster', key: 4, isActive: false},
    {uid: 5, title: 'fox', key: 5, isActive: false},
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

    // Set card status.
    const setStatus = (action) => {
        switch (action) {
            case 'done':
                console.log('done');
                break;
            case 'redo':
                console.log('redo');
                break;
            default:
                console.log('remove');
        }
    }

    // Make inactive.
    const makeInactive = (keyIndex) => {
        console.log('asd')
        // const newState = [...todos];
        //
        // const a = newState.find(function (item) {
        //     return item.uid === keyIndex;
        // });
        //
        // newState[newState.indexOf(a)].isActive = !newState[newState.indexOf(a)].isActive;
        // setTodos(newState);
    }

    return (
        <div className='card__body'>
                <ul className='todo-list__active'>
                    <h4>Active tasks</h4>
                    {todos.filter(item => item.isActive)
                        .map((item, index) => (
                            <ListItem key={item.uid}
                                      title={item.title}
                                      isActive={item.isActive}
                                      setStatus={setStatus}
                                      makeInactive={makeInactive}/>
                        ))}
                </ul>

                <ul className='todo-list__inactive'>
                    <h4>Finished tasks</h4>
                    {todos.filter(item => !item.isActive)
                        .map((item, index) => (
                            <ListItem key={item.uid}
                                      title={item.title}
                                      isActive={item.isActive}
                                      setStatus={setStatus}
                                      makeInactive={makeInactive}/>
                        ))}
                </ul>

            <AddTodo currentState={todos}
                     updateTodoList={updateTodoList}/>
        </div>
    )
}

export default ListCard;