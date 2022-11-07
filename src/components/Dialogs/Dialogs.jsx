import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilites/validators/validators";
import {Textarea} from "../common/formsControls/FormsControls";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                              avatarURL={dialog.avatarURL}
                                                                              key={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}
                                                                              author={message.author}
                                                                              authorAvatar={message.authorAvatar}
                                                                              key={message.id}/>);

    let addNewMessage= (values) => {
        props.addMessage(values.messageText);
    };

    return (
        <div className={classes.dialogs}>
            <section className={classes.dialogsItems}>
                {dialogsElements}
            </section>
            <section className={classes.messages}>
                {messagesElements}
                <MessageReduxForm {...props} onSubmit={addNewMessage}/>
            </section>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'messageText'}
                   validate={[required, maxLength50]}
                   placeholder={'Enter your message'}/>
            <button className={classes.addMessageButton}>Add message</button>
        </form>
    )
};

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm);

export default Dialogs;