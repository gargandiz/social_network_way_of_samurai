import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Zheka"},
        {id: 2, name: "Dimon"},
        {id: 3, name: "Yana"},
        {id: 4, name: "Albina"},
        {id: 5, name: "Vovan"}
    ]

    let messages = [
        {id: 1, message: "How kind of you"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "I'm glad to see you"},
        {id: 4, message: "I have a sore throat"},
        {id: 5, message: "Let's have lunch"}
    ]

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElements = messages.map((m) => {
        return (
            <Message message={m.message} />
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;