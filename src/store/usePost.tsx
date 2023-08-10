import { create } from "zustand";
import { PostT } from "../types/types";
import { toast } from "react-toastify";
import postServices from "../services/postServices";

type PostStateT = {
  posts: PostT[];
  gettingPosts: boolean;
  addingPost: boolean;
  updatingPost: boolean;
  deletingPost: boolean;
  error: "";
  getPosts: (token: string) => void;
  addPost: (payload: PostT, token: string) => void;
  updatePost: (payload: PostT, postId: string, token: string) => void;
  deletePost: (postId: string, token: string) => void;
};

const usePost = create<PostStateT>((set) => ({
  posts: [],
  gettingPosts: false,
  addingPost: false,
  updatingPost: false,
  deletingPost: false,
  error: "",

  getPosts: async (token: string) => {
    set((state) => ({ gettingPosts: (state.gettingPosts = true) }));
    try {
      const posts = await postServices.getPosts(token);
      set((state) => ({ gettingPosts: (state.gettingPosts = false) }));
      set((state) => ({ posts: (state.posts = posts) }));
    } catch (error: any) {
      set((state) => ({ gettingPosts: (state.gettingPosts = false) }));
      toast.error(error.response.data.message);
    }
  },

  addPost: async (payload: PostT, token: string) => {
    set((state) => ({ addingPost: (state.addingPost = true) }));
    try {
      await postServices.addPost(payload, token);
      set((state) => ({ addingPost: (state.addingPost = false) }));
    } catch (error: any) {
      set((state) => ({ addingPost: (state.addingPost = false) }));
      toast.error(error.response.data.message);
    }
  },

  updatePost: async (payload: PostT, postId: string, token: string) => {
    set((state) => ({ updatingPost: (state.updatingPost = true) }));
    try {
      await postServices.updatePost(payload, postId, token);
      set((state) => ({ updatingPost: (state.updatingPost = false) }));
    } catch (error: any) {
      set((state) => ({ updatingPost: (state.updatingPost = false) }));
      toast.error(error.response.data.message);
    }
  },

  deletePost: async (postId: string, token: string) => {
    set((state) => ({ deletingPost: (state.deletingPost = true) }));
    try {
      await postServices.deletePost(postId, token);
      set((state) => ({ deletingPost: (state.deletingPost = false) }));
    } catch (error: any) {
      set((state) => ({ deletingPost: (state.deletingPost = false) }));
      toast.error(error.response.data.message);
    }
  },
}));

export default usePost;
