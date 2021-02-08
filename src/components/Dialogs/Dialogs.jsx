import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                              avatarURL={dialog.avatarURL}
                                                                              key={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}
                                                                              author={message.author}
                                                                              authorAvatar={message.authorAvatar}
                                                                              key={message.id}/>);

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (event) => {
        let textMessage = event.target.value;
        props.updateNewMessageText(textMessage);
    };

    return (
        <div className={classes.dialogs}>
            <section className={classes.dialogsItems}>
                {dialogsElements}
            </section>
            <section className={classes.messages}>
                {messagesElements}
                <textarea placeholder={'Enter your message'}
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText}/>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </section>
        </div>
    );
};

export default Dialogs;