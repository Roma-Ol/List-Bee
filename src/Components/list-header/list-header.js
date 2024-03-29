import {TextField} from "@mui/material";

const ListHeader = ({todos}) => {
    const totalTasks = todos.length,
        activeTasks = todos.filter(item => item.isActive).length,
        completedTasks = todos.filter(item => !item.isActive).length;

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

                <div className="card__header__counter">
                    <div className="card__header__counter--total">
                        <p>
                            U've planned to manage {totalTasks} tasks today.
                        </p>
                    </div>
                    <div className="card__header__counter--active">
                        <p>
                            U've managed to complete {completedTasks} of them already.
                        </p>
                    </div>
                    <div className="card__header__counter--closed">
                        <p>
                            And only {activeTasks} left to go!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ListHeader;