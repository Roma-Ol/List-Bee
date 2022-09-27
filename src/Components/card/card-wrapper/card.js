import ListItem from "../list-item/listItem";
import AddTodo from "../add-item/add-todo";

const ListCard = ({updateToDo, setStatus, todos}) => {

    return (
        <div className='card__body'>
            <ul className='todo-list__active'>
                <h4>Active tasks</h4>
                {todos.filter(item => item.isActive)
                    .map((item, index) => (
                        <ListItem key={item.uid}
                                  id={item.uid}
                                  title={item.title}
                                  isActive={item.isActive}
                                  setStatus={setStatus}/>
                    ))}
            </ul>

            <ul className='todo-list__inactive'>
                <h4>Finished tasks</h4>
                {todos.filter(item => !item.isActive)
                    .map((item, index) => (
                        <ListItem key={item.uid}
                                  id={item.uid}
                                  title={item.title}
                                  isActive={item.isActive}
                                  setStatus={setStatus}/>
                    ))}
            </ul>

            <AddTodo currentState={todos}
                     updateTodoList={updateToDo}/>
        </div>
    )
}

export default ListCard;