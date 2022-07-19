const CardContent = (props) => {
    const todo = props.todos;

    return (
        <ul>
            {todo.map(function(item, i){
                return (
                    <li className="todo" key={item.uid}>
                        <p className="todo__title">
                            {item.title}
                        </p>

                        <p className="todo__description">
                            {item.description}
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}

export default CardContent;