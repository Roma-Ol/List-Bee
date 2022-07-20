import {Button, ButtonGroup, Fab} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import CardContent from "./card-content";
import AddTodo from "./add-todo";

const ListCard = () => {
    // Open & close card settings identifier.
    const [isOpened, setOppositeVal] = useState(false);

    // All the todos of this card.
    const [todo, setTodo] = useState([
    ]);

    const addTodo = (newTodo) => {
        setTodo((todo) => newTodo);
    }

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

            <div className="list__card__content">
                <CardContent todos={todo} />
            </div>

            <div className="list__card__add-todo">
                <AddTodo currentState={todo} addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default ListCard;