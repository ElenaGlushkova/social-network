import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>
                <img className={classes.avatarImg} src={props.avatarURL} alt={''}/>
                <div className={classes.avatarName}>{props.name}</div>
            </NavLink>
        </div>
    );
};

export default DialogItem;