import {TextField} from "@mui/material";

const CardContent = (props) => {
    const todo = props.todos;

    return (
        <ul>
            {todo.map(function (item, i) {
                return (
                    <li className="todo" key={item.uid}>
                        <TextField id="standard-basic"
                                   val="Standard"
                                   variant="standard"
                                   className="todo__title"
                                   value={item.title}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default CardContent;