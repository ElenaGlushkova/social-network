import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                imgURL: 'https://cs7.pikabu.ru/post_img/big/2018/04/18/8/1524057007156326200.jpg',
                likesNumber: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile});


export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
};

export default profileReducer;