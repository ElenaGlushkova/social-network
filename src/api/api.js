import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e7e77d00-7c70-4bd6-b41e-5a7ee6189d8a"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(pageSize = 5, currentPage = 1)  {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    }
};

export const authAPI = {
    authUser() {
        return instance.get('auth/me').then(response => response.data)
    }
};

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
};
