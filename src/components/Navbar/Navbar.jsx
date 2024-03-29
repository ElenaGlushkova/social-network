import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavbarFriendsContainer from "./NavbarFriends/NavbarFriendsContainer";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/dialogs'} activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/news'} activeClassName={classes.active}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/users'} activeClassName={classes.active}>Users</NavLink>
                </li>
                <li className={`${classes.item} ${classes.settings}`}>
                    <NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/login'} activeClassName={classes.active}>Login</NavLink>
                </li>
            </ul>
            <NavbarFriendsContainer/>
        </nav>
    );
};

export default Navbar;