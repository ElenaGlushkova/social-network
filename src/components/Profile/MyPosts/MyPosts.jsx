import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} imgURL={post.imgURL} likesNumber={post.likesNumber}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    };

    return (
        <section className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={'Enter your post text'} onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </section>
    );
};

export default MyPosts;