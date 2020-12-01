/*
let rerenderEntireTree = () => {
    console.log('State changed');
};

let state = {
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
        newPostText: 'it-kamasutra.com'
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
        newMessageText: 'What\'s new?'
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        imgURL: 'https://cs7.pikabu.ru/post_img/big/2018/04/18/8/1524057007156326200.jpg',
        likesNumber: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
        author: 'me',
        authorAvatar: 'https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-62.jpg'
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;
*/
