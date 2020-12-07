import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../assets/images/user.png';


class Users extends React.Component {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)

            });
    }

    onPageChange = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        debugger;
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(page => {
                    return <button key={page.id}
                                   className={`${classes.page} ${this.props.currentPage === page && classes.selectedPage}`}
                                   onClick={(event) => {
                                       this.onPageChange(page)
                                   }}>{page}</button>
                })}
                <h1 className={classes.usersHeading}>Users</h1>
                {this.props.users.map(user =>
                    <article key={user.id} className={classes.users}>
                        <section className={classes.userView}>
                            <img className={classes.userPhoto}
                                 src={user.photos.small != null ? user.photos.small : userPhoto} alt={''}/>
                            <div className={classes.followButton}>
                                {user.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>
                                        Unfollow
                                    </button>
                                    : <button onClick={() => {
                                        this.props.follow(user.id)
                                    }}>
                                        Follow
                                    </button>}
                            </div>
                        </section>
                        <section className={classes.description}>
                            <section className={classes.nameStatus}>
                                <div>
                                    {user.name}
                                </div>
                                <div className={classes.status}>
                                    {user.status}
                                </div>
                            </section>
                            <section>
                                <div>
                                    {'user.location.country,'}
                                </div>
                                <div>
                                    {'user.location.city'}
                                </div>
                            </section>
                        </section>
                    </article>)}

            </div>
        )
    }
}

export default Users;