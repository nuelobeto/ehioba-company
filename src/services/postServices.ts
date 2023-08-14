import axios from "axios";
import { BASE_URL } from "../config/baseUrl";
import { AddPostT } from "../types/types";
import { config } from "../config/headers";

const getPosts = async () => {
  const response = await axios.get(`${BASE_URL}/getPosts`);

  return response.data;
};

const addPost = async (payload: AddPostT, token: string) => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("category", payload.category);
  formData.append("content", payload.content);
  formData.append("image", payload.image);
  formData.append("author", payload.author);

  const response = await axios.post(
    `${BASE_URL}/addPost`,
    formData,
    config(token)
  );

  return response.data;
};

const updatePost = async (payload: AddPostT, postId: string, token: string) => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("category", payload.category);
  formData.append("content", payload.content);
  formData.append("image", payload.image);
  formData.append("author", payload.author);

  const response = await axios.put(
    `${BASE_URL}/updatePost/${postId}`,
    formData,
    config(token)
  );

  return response.data;
};

const deletePost = async (postId: string, token: string) => {
  const response = await axios.delete(
    `${BASE_URL}/deletePost/${postId}`,
    config(token)
  );

  return response.data;
};

const postServices = {
  getPosts,
  addPost,
  updatePost,
  deletePost,
};

export default postServices;
