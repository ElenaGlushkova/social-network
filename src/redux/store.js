import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";


let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 'dimych',
                    name: 'Dimych',
                    avatarURL: 'https://cs10.pikabu.ru/post_img/big/2018/04/18/8/1524057639117058892.jpg'
                },
                {
                    id: 'andrey',
                    name: 'Andrey',
                    avatarURL: 'https://cs8.pikabu.ru/post_img/big/2018/04/18/8/1524057747167747587.jpg'
                },
                {
                    id: 'sveta',
                    name: 'Sveta',
                    avatarURL: 'https://cs10.pikabu.ru/post_img/big/2018/04/18/8/1524058283170034002.jpg'
                },
                {
                    id: 'sasha',
                    name: 'Sasha',
                    avatarURL: 'https://cs7.pikabu.ru/post_img/big/2018/04/18/8/1524057007156326200.jpg'
                },
                {
                    id: 'victor',
                    name: 'Victor',
                    avatarURL: 'https://cs11.pikabu.ru/post_img/big/2018/04/18/8/152405740718624879.jpg'
                },
                {
                    id: 'valera',
                    name: 'Valera',
                    avatarURL: 'https://cs8.pikabu.ru/post_img/big/2018/04/18/8/1524057256124559907.jpg'
                }
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi',
                    author: 'me',
                    authorAvatar: 'https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-62.jpg'
                },
                {
                    id: 2,
                    message: 'How are you?',
                    author: 'me',
                    authorAvatar: 'https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-62.jpg'
                },
                {
                    id: 3,
                    message: 'Wazzap!!!',
                    author: 'Dimych',
                    authorAvatar: 'https://cs10.pikabu.ru/post_img/big/2018/04/18/8/1524057639117058892.jpg'
                }
            ],
            newMessageText: ''
        },
        navbar: {
            friends: [
                {
                    friendName: 'Andrey',
                    friendAvatarURL: 'https://cs8.pikabu.ru/post_img/big/2018/04/18/8/1524057747167747587.jpg'
                },
                {
                    friendName: 'Sveta',
                    friendAvatarURL: 'https://cs10.pikabu.ru/post_img/big/2018/04/18/8/1524058283170034002.jpg'
                },
                {
                    friendName: 'Sasha',
                    friendAvatarURL: 'https://cs7.pikabu.ru/post_img/big/2018/04/18/8/1524057007156326200.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;