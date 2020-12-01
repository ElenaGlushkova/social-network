let initialState = {
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
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default navbarReducer;