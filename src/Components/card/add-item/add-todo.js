import {Button, TextField} from "@mui/material";
import {useState} from "react";

const AddTodo = ({updateTodoList, currentState}) => {

    const [todo, setTodo] = useState('');

    // Add 'todo' to list of all the 'todos'.
    const addTodo = () => {
        if (todo !== '') {
            const newTodo = {
                uid: currentState.length + 1,
                key: currentState.length + 1,
                title: todo,
                isActive: true
            }

            // Change state
            updateTodoList([...currentState, newTodo]);

            // And clear the field.
            document.querySelector(".todo__add")
                .querySelector(".MuiInput-input")
                .value = "";

            // And clear the state.
            setTodo((todo) => '');
        }
    }

    // Check if user pressed enter.
    const handleKeyPress = (event) => {
        if(event.keyCode === 13){
            addTodo();
        }
    }

    // Set input value.
    const handleInputChange = ({ target }) => {
        const value = target.value;
        setTodo((todo) => value)
    }

    return(
        <div className='add-todo'>
            <TextField id="standard-basic"
                       val="Standard"
                       variant="standard"
                       className="todo__title todo__add"
                       onKeyDown={handleKeyPress}
                       onChange={handleInputChange}/>

            <Button variant="outlined"
                    onClick={addTodo}>+</Button>
        </div>
    )
}

export default AddTodo;