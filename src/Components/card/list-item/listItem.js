const cardStyle = {
    border: '1px solid cyan',
    display: 'flex',
    maxWidth: '748px',
    justifyContent: 'space-between',
    background: 'white',
    marginBottom: '15px',
    cursor: 'move',
}

const ListItem = ({title, identifier, isActive, setStatus, makeInactive}) => {
    const handleClick = (e) => {
        const action = e.target.getAttribute('value');
        setStatus(action);
    }

    return (
        <li className='todo-list__item'
            style={cardStyle}>

            <div className="todo-list__item__title">
                {title}
            </div>

            <div className="todo-list__item_cta">
                {isActive
                    ? <button className='todo-list__item__done'  onClick={handleClick} value="done">Done</button>
                    : <button className='todo-list__item__redo'  onClick={handleClick} value="redo">Redo</button>
                }

                <button className='todo-list__item__delete' onClick={handleClick} value="remove"> Remove</button>
            </div>
        </li>

    )
}

export default ListItem;