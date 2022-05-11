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

const DialogsData = [
    {id: 1, name: "Zheka"},
    {id: 2, name: "Dimon"},
    {id: 3, name: "Yana"},
    {id: 4, name: "Albina"},
    {id: 5, name: "Vovan"}
]

const MassageData = [
    {id: 1, massage: "Hi",},
    {id: 2, massage: "How do you do?"},
    {id: 3, massage: "I'm glad to see you"},
    {id: 4, massage: "I have a sore throat"},
    {id: 5, massage: "Let's have lunch"}
]

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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogsItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogsItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogsItem name={DialogsData[2].name} id={DialogsData[1].id} />
                <DialogsItem name={DialogsData[3].name} id={DialogsData[1].id} />
                <DialogsItem name={DialogsData[4].name} id={DialogsData[1].id} />
            </div>
            <div className={classes.massages}>
                <Massage massage={MassageData[0].massage} />
                <Massage massage={MassageData[1].massage} />
                <Massage massage={MassageData[2].massage} />
                <Massage massage={MassageData[3].massage} />
                <Massage massage={MassageData[4].massage} />
            </div>
        </div>
    )
}

export default Dialogs;