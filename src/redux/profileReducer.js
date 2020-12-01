const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: ''
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
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;