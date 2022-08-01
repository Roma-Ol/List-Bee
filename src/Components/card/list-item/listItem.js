import React, {useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd'

const cardStyle = {
    border: '1px solid cyan',
    display: 'flex',
    maxWidth: '748px',
    justifyContent: 'space-between',
    background: 'white',
    marginBottom: '15px',
    cursor: 'move',
}

const ListItem = ({title, index, identifier, moveListItem, makeInactive}) => {

    // useDrag - the list item is draggable
    const [{isDragging}, dragRef] = useDrag({
        type: 'item',
        item: {index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    // useDrop - the list item is also a drop area
    const [spec, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            // if dragging down, continue only when hover is smaller than middle Y
            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            // if dragging up, continue only when hover is bigger than middle Y
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const handleClick = () => {
        makeInactive(identifier);
    }

    // Join the 2 refs together into one (both draggable and can be dropped on)
    const ref = useRef(null),
        dragDropRef = dragRef(dropRef(ref))

    return (
        <li className='todo-list__item'
            ref={dragDropRef}
            style={cardStyle}>

            <div className="todo-list__item__title">
                {title}
            </div>

            <button className='todo-list__item__delete'
                    onClick={handleClick}
                    value="Done">
                Done
            </button>
        </li>

    )
}

export default ListItem;