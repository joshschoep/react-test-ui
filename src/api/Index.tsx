import axios from "axios"
import Post from "./Post";

export const api = axios.create({ 
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
});

export const Posts = {
    index: () => api.get(`/posts`),
    get: (id: number) => api.get(`/posts/${id}`),
    create: (post: Post) => api.post(`/posts`, post),
    update: (id: number, post: Post) => api.put(`/posts/${id}`, post),
    destroy: (id: number) => api.delete(`/posts/${id}`),
    recent: () => api.get(`/recent`)
}

export const Comments = {
    index: (post: number) => api.get(`/posts/${post}/comments`),
    get: (id: number) => api.get(`/comments/${id}`),
    create: (post: number, comment: Comment) => api.post(`posts/${post}/comments`, comment),
    update: (id: number, comment: Comment) => api.put(`/comments/${id}`, comment),
    destroy: (id: number) => api.delete(`/posts/${id}`),
}

export const Users = {
    get: (id: number) => api.get(`/users/${id}`)
}