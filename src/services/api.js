import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com";
export const jsonAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postsService = {
  getPosts: async () => {
    const response = await jsonAxios.get('/posts');
    return response.data;
  }
};