import React from 'react';
import classes from './Preloader.module.css';

const Preloader = (props) => {
    return <div className={classes['lds-ellipsis']}>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
};

export default Preloader;