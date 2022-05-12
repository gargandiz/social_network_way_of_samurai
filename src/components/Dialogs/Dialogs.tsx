import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
}

type MassagePropsType = {
    massage: string
}

const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props: MassagePropsType) => {
    return (
        <div className={classes.massage}>{props.massage}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Zheka"},
        {id: 2, name: "Dimon"},
        {id: 3, name: "Yana"},
        {id: 4, name: "Albina"},
        {id: 5, name: "Vovan"}
    ]

    let massages = [
        {id: 1, massage: "Hi",},
        {id: 2, massage: "How do you do?"},
        {id: 3, massage: "I'm glad to see you"},
        {id: 4, massage: "I have a sore throat"},
        {id: 5, massage: "Let's have lunch"}
    ]

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let massagesElements = massages.map((m) => {
        return (
            <Massage massage={m.massage} />
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={classes.massages}>
                { massagesElements }
            </div>
        </div>
    )
}

export default Dialogs;