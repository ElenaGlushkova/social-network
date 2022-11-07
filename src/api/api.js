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
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Use profileAPI object');
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
};

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    }
};

