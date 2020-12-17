import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import {connect} from 'react-redux'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)

        });
    }

    onPageChange = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.pageSize, currentPage).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        });
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChange={this.onPageChange}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapsStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapsStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingInProgress
    })(UsersContainer);
