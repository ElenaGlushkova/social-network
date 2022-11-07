import React from 'react';
import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilites/validators/validators";
import {Input} from "../common/formsControls/FormsControls";

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <label htmlFor={'login'}/>
            <Field component={Input}
                   name={'login'}
                   validate={[required, maxLength15]}
                   className={classes.login}
                   id={'login'}
                   placeholder={'Login'}/>
            <label htmlFor={'password'}/>
            <Field component={Input}
                   name={'password'}
                   validate={[required, maxLength15]}
                   className={classes.password}
                   id={'password'}
                   placeholder={'Password'}/>
            <div className={classes.rememberMe}>
                <Field component={'input'}
                       name={'rememberMe'}
                       id={'rememberMe'}
                       type={'checkbox'}/>
                <label htmlFor={'rememberMe'}> remember me</label>
            </div>
            <button className={classes.loginButton}>Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
};

export default Login;