import './App.css';
import ListHeader from "../list-header/list-header";
import ListCard from "../card/card-wrapper/card";
import {useState} from "react";

function App() {
    // All the todos of this card.
    const [todos, setTodos] = useState([
        {uid: 1, title: 'dog', key: 1, isActive: true},
        {uid: 2, title: 'cat', key: 2, isActive: true},
        {uid: 3, title: 'fish', key: 3, isActive: true},
        {uid: 4, title: 'hamster', key: 4, isActive: false},
        {uid: 5, title: 'fox', key: 5, isActive: false},
    ]);

    // Add items to the list.
    const updateTodoList = (newTodo) => {
        setTodos((todos) => newTodo);
    }

    // Set card status.
    const setStatus = (action, id) => {
        const newState = [...todos],
            key = newState.find((item) => { return item.uid === id }),
            keyIndex = newState.indexOf(key);

        action === 'remove'
            ? newState.splice(keyIndex, 1)
            : newState[keyIndex].isActive = !newState[keyIndex].isActive;

        setTodos(() => newState);
    }

    return (
        <div className="App">
            <div className="card">
                <ListHeader todos = {todos}/>
                <ListCard updateToDo = {updateTodoList}
                          setStatus = {setStatus}
                          todos = {todos}/>
            </div>
        </div>
  );
}

export default App;
