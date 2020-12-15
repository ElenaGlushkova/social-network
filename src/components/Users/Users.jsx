import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';


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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "e7e77d00-7c70-4bd6-b41e-5a7ee6189d8a"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    })
                                }}>
                                    Unfollow
                                </button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "e7e77d00-7c70-4bd6-b41e-5a7ee6189d8a"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
                                }}>
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