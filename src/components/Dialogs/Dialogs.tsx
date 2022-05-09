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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogsItem name={"Zheka"} id={1} />
                <DialogsItem name={"Dimon"} id={2} />
                <DialogsItem name={"Yana"} id={3} />
                <DialogsItem name={"Albina"} id={4} />
                <DialogsItem name={"Vovan"} id={5} />
            </div>
            <div className={classes.massages}>
                <Massage massage={"Hi"} />
                <Massage massage={"How do you do?"} />
                <Massage massage={"I'm glad to see you"} />
            </div>
        </div>
    )
}

export default Dialogs;