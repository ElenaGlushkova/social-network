import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <img src={'http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png'} width={'80px'}
                 alt={''}/>
            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <div className={classes.authUser}>{props.login}</div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
};

export default Header;