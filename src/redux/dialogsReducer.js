const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.newMessageText,
                author: 'me',
                authorAvatar: 'https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-62.jpg'
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
};

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;