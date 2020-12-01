import React from 'react';
import classes from './Message.module.css';


const Message = (props) => {
    return (
        <div className={`${classes.message} ${props.author === 'me' ? classes.myMessage : ''}`}>
            <img className={classes.authorAvatar} src={props.authorAvatar} alt={''}/>
            <div className={classes.text}>
                {props.message}
            </div>
        </div>
    );
};

export default Message;