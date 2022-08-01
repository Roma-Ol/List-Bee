import {TextField} from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const CardContent = (props) => {
    const todo = props.currentState;

    const deleteTodo = (e) => {
        const inputVal = e.target
            .closest('.todo')
            .querySelector('input')
            .value;

        props.updateTodoList(todo.filter(i => i.title !== inputVal));
    }

    return (
        <ul>
            {todo.map(function (item) {
                return (
                    <li className="todo" key={item.uid}>
                        <TextField id="standard-basic"
                                   val="Standard"
                                   variant="standard"
                                   className="todo__title"
                                   value={item.title}/>
                        <Button variant="outlined"
                                startIcon={<DeleteIcon/>}
                                onClick={deleteTodo}
                                value="Done">
                        </Button>
                    </li>
                )
            })}
        </ul>
    )
}

export default CardContent;