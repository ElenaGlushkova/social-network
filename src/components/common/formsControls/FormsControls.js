import React from 'react';
import classes from './FormsControls.module.css'


export const Textarea = ({input, meta, ...restProps}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.field}>
            <textarea {...input} {...restProps}
                      className={`${classes.text} ${hasError && classes.error}`}/>
            {hasError && <div className={classes.errorTextField}><span className={classes.errorText}>{meta.error}</span></div>}
        </div>
    )
};

export const Input = ({input, meta, ...restProps}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.field}>
            <input {...input} {...restProps}
                   className={`${classes.text} ${hasError && classes.error}`}/>
            {hasError && <div className={classes.errorTextField}><span className={classes.errorText}>{meta.error}</span></div>}
        </div>
    )
};