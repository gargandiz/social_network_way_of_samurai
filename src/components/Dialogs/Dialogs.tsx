import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + " " + classes.active}>
                     <NavLink to="/dialogs/1">Dimon</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Zheka</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Vovan</NavLink>
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