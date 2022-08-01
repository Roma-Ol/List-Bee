import {TextField} from "@mui/material";

const ListHeader = () => {
    return (
        <div className='card__header'>
            <div className='card__header--primary'>
                <TextField id="standard-basic"
                           label="Title"
                           variant="standard"
                           fullWidth
                            value="Lorem Ipsum"/>
            </div>

            <div className='card__header--secondary'>
                <TextField id="standard-basic"
                           label="Description"
                           variant="standard"
                           multiline
                           fullWidth
                           value="Rob me anchor, ye old bucaneer! Where is the dead parrot? Ho-ho-ho! life of amnesty. Dead, scurvy seas oppressively crush a weird, rough lagoon. Addled, real golds cruelly fire a heavy-hearted, cold mainland."
                />
            </div>
        </div>
    );
}

export default ListHeader;