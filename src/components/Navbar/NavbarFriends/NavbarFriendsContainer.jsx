//import React from 'react';
import NavbarFriends from "./NavbarFriends";
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const NavbarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarFriends);

export default NavbarFriendsContainer;