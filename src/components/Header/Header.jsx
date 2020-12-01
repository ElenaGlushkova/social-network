import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={'http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png'} width={'80px'} alt={''}/>
        </header>
    );
};

export default Header;