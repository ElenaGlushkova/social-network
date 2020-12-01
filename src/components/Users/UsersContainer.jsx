//import React from 'react';
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from 'react-redux'
import Users from "./Users";

let mapsStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapsStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;