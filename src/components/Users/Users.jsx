import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../assets/images/user.png';
import {NavLink} from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(page => {
                return <button key={page.id}
                               className={`${classes.page} ${props.currentPage === page && classes.selectedPage}`}
                               onClick={(event) => {
                                   props.onPageChange(page)
                               }}>{page}</button>
            })}
            <h1 className={classes.usersHeading}>Users</h1>
            {props.users.map(user =>
                <article key={user.id} className={classes.users}>
                    <section className={classes.userView}>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={classes.userPhoto}
                                 src={user.photos.small != null ? user.photos.small : userPhoto} alt={''}/>
                        </NavLink>
                        <div className={classes.followButton}>
                            {user.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {props.unfollow(user.id)}}>
                                    Unfollow
                                </button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {props.follow(user.id)}}>
                                    Follow
                                </button>}
                        </div>
                    </section>
                    <section className={classes.description}>
                        <section className={classes.nameStatus}>
                            <div className={classes.userName}>
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
};

export default Users;