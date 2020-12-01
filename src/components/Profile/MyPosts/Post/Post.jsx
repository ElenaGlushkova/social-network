import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.imgURL} alt={''}/>
            <span className={classes.message}>{props.message}</span>
            <span className={classes.likesNumber}>{props.likesNumber}</span>
        </div>
    );
};

export default Post;