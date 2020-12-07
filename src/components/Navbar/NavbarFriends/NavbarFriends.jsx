import React from 'react';
import classes from './NavbarFriends.module.css';
import {NavLink} from "react-router-dom";
import NavbarFriend from "./NavbarFriend/NavbarFriend";

const NavbarFriends = (props) => {

    let navbarFrindsElements = props.friends.map(navbarFriend => <NavbarFriend friendName={navbarFriend.friendName}
                                                                               friendAvatarURL={navbarFriend.friendAvatarURL}
                                                                               key={navbarFriend.id}/>);

    return (
        <section className={`${classes.item} ${classes.friends}`}>
            <NavLink to={'/friends'} activeClassName={classes.active}>Friends</NavLink>
            <ul className={classes.friendsList}>
                {navbarFrindsElements}
            </ul>
        </section>
    );
};

export default NavbarFriends;