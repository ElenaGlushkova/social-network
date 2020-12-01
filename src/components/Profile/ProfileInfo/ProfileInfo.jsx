import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <article>
            <section className={classes.imageContainer}>
                <img className={classes.mainImage}
                     src={'https://s1.1zoom.me/b3066/874/Shells_Sea_Beach_Sand_513034_1366x768.jpg'} alt={''}/>
            </section>
            <section className={classes.userInfo}>
                <div className={classes.avatar}>
                    <img className={classes.avatarImage}
                         src={'https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-62.jpg'}
                         alt={''}/>
                </div>
                <ul className={classes.description}>
                    <li className={classes.name}>Elena G.</li>
                    <li>Date of Birth: 6 july</li>
                    <li>City: Sevastopol</li>
                    <li>Education: SNTU'07</li>
                    <li>Web-site:</li>
                </ul>
            </section>
        </article>
    );
};

export default ProfileInfo;