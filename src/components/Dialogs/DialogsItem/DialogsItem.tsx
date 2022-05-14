import React from 'react';
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
}

const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;