import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios';
import userFemalePhoto from '../assets/images/user_female.png';

/*[
    {
        id: 1,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: {country: 'Belarus', city: 'Minsk'},
        followed: false,
        photoUrl: 'https://cs10.pikabu.ru/post_img/2018/04/18/8/1524057639117058892.jpg'
    },
    {
        id: 2,
        fullName: 'Sasha',
        status: 'I am a boss too',
        location: {country: 'Russia', city: 'Moscow'},
        followed: true,
        photoUrl: 'https://cs10.pikabu.ru/post_img/2018/04/18/8/152405686915538548.jpg'
    },
    {
        id: 3,
        fullName: 'Andrey',
        status: 'I am a boss too',
        location: {country: 'Ukraine', city: 'Kiev'},
        followed: false,
        photoUrl: 'https://cs11.pikabu.ru/post_img/2018/04/18/8/152405740718624879.jpg'
    }
]*/

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }
    return (
        <div>
            <h1 className={classes.usersHeading}>Users</h1>
            {props.users.map(user =>
                <article key={user.id} className={classes.users}>
                    <section className={classes.userView}>
                        <img className={classes.userPhoto} src={user.photos.small != null ? user.photos.small : userFemalePhoto} alt={''}/>
                        <div className={classes.followButton}>
                            {user.followed
                                ? <button onClick={() => {props.unfollow(user.id)}}>
                                    Unfollow
                                </button>
                                : <button onClick={() => {props.follow(user.id)}}>
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
                                {'user.location.country' + ','}
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