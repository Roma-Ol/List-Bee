import {Button, ButtonGroup, Fab} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

const ListCard = () => {
    const [isOpened, setOppositeVal] = useState(false);

    const buttons = [
        <Button key="one">Delete</Button>,
        <Button key="two">Add row (left)</Button>,
        <Button key="three">Add row (right)</Button>,
    ];

    return(
        <div className='list__card'>
            <Fab variant="extended"
                 size="small"
                 color="primary"
                 aria-label="add"
                 onClick={() => {setOppositeVal(isOpened === false)}}>
               Actions
                <MenuIcon/>
            </Fab>

            {isOpened?
                <div className="list__card__quick-actions">
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical outlined button group">
                        {buttons}
                    </ButtonGroup>
                </div>
                :
                null
            }
        </div>
    )
}

export default ListCard;