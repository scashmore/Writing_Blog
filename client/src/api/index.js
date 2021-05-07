import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertStory = payload => api.post(`/story`, payload)
export const getAllStories = () => api.get(`/stories`)
export const updateStoryById = (id, payload) => api.put(`/story/${id}`, payload)
export const deleteStoryById = id => api.delete(`/story/${id}`)
export const getStoryById = id => api.get(`/story/${id}`)

const apis = {
    insertStory,
    getAllStories,
    updateStoryById,
    deleteStoryById,
    getStoryById,
}

export default apis