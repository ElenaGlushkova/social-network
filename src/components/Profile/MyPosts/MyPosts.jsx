import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilites/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";


const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} imgURL={post.imgURL}
                                                      likesNumber={post.likesNumber} key={post.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.postText);
    };

    return (
        <section className={classes.myPosts}>
            <h3>My posts</h3>
            <PostReduxForm {...props} onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </section>
    );
};

const maxLength30 = maxLengthCreator(30);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'postText'}
                   validate={[required, maxLength30]}
                   placeholder={'Enter your post text'}/>
            <button className={classes.addPostButton}>Add post</button>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

export default MyPosts;