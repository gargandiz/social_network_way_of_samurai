import React from 'react';
import classes from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + " " + classes.active}>
                    Dimon
                </div>
            </div>
            <div className={classes.massages}>
                <div className={classes.massage}>Hi</div>
                <div className={classes.massage}>How do you do?</div>
            </div>
        </div>
    )
}

export default Dialogs;