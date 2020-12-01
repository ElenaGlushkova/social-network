import React from 'react';
import classes from './NavbarFriend.module.css';

const NavbarFriend = (props) => {
    return (
        <div className={classes.friend}>
            <img className={classes.friendAvatar}
                 src={props.friendAvatarURL} alt={''}/>
            <div className={classes.friendName}>{props.friendName}</div>
        </div>
    );
};

export default NavbarFriend;