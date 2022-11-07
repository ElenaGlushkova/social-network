import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            imgURL: 'https://cs8.pikabu.ru/post_img/big/2018/04/18/8/1524057747167747587.jpg',
            likesNumber: 25
        },
        {
            id: 2,
            message: 'It\'s my first post',
            imgURL: 'https://cs7.pikabu.ru/post_img/big/2018/04/18/8/1524057007156326200.jpg',
            likesNumber: 12
        }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                imgURL: 'https://cs7.pikabu.ru/post_img/big/2018/04/18/8/1524057007156326200.jpg',
                likesNumber: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile});
export const setStatus = (status) => (
    {type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data.data))
        })
    }
};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
};

export default profileReducer;