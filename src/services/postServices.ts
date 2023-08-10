import axios from "axios";
import { BASE_URL } from "../config/baseUrl";
import { PostT } from "../types/types";
import { config } from "../config/headers";

const getPosts = async (token: string) => {
  const response = await axios.get(`${BASE_URL}/getPosts`, config(token));

  return response.data;
};

const addPost = async (payload: PostT, token: string) => {
  const response = await axios.post(
    `${BASE_URL}/addPost`,
    payload,
    config(token)
  );

  return response.data;
};

const updatePost = async (payload: PostT, postId: string, token: string) => {
  const response = await axios.put(
    `${BASE_URL}/updatePost/${postId}`,
    payload,
    config(token)
  );

  return response.data;
};

const deletePost = async (postId: string, token: string) => {
  const response = await axios.delete(
    `${BASE_URL}/updatePost/${postId}`,
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
