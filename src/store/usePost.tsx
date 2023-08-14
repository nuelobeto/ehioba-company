import { create } from "zustand";
import { PostT, AddPostT } from "../types/types";
import { toast } from "react-toastify";
import postServices from "../services/postServices";

type PostStateT = {
  posts: PostT[];
  gettingPosts: boolean;
  addingPost: boolean;
  updatingPost: boolean;
  deletingPost: boolean;
  error: "";
  getPosts: () => void;
  addPost: (payload: AddPostT, token: string) => void;
  updatePost: (payload: AddPostT, postId: string, token: string) => void;
  deletePost: (postId: string, token: string) => void;
};

const usePost = create<PostStateT>((set) => ({
  posts: [],
  gettingPosts: false,
  addingPost: false,
  updatingPost: false,
  deletingPost: false,
  error: "",

  getPosts: async () => {
    set((state) => ({ gettingPosts: (state.gettingPosts = true) }));
    try {
      const posts = await postServices.getPosts();
      set((state) => ({ gettingPosts: (state.gettingPosts = false) }));
      set((state) => ({ posts: (state.posts = posts) }));
    } catch (error: any) {
      set((state) => ({ gettingPosts: (state.gettingPosts = false) }));
      toast.error(error.response.data.message);
    }
  },

  addPost: async (payload: AddPostT, token: string) => {
    set((state) => ({ addingPost: (state.addingPost = true) }));
    try {
      const post = await postServices.addPost(payload, token);
      set((state) => ({ addingPost: (state.addingPost = false) }));
      set((state) => ({ posts: (state.posts = [post, ...state.posts]) }));
      toast.success("New Post Added!");
    } catch (error: any) {
      set((state) => ({ addingPost: (state.addingPost = false) }));
      toast.error(error.response.data.message);
    }
  },

  updatePost: async (payload: AddPostT, postId: string, token: string) => {
    set((state) => ({ updatingPost: (state.updatingPost = true) }));
    try {
      const updatedPost = await postServices.updatePost(payload, postId, token);
      set((state) => ({ updatingPost: (state.updatingPost = false) }));
      const postIndex = usePost
        .getState()
        .posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        const updatedPosts = [...usePost.getState().posts];
        updatedPosts[postIndex] = {
          ...updatedPosts[postIndex],
          ...updatedPost,
        };
        set((state) => ({ posts: (state.posts = updatedPosts) }));
        toast.success("Your Post has been Updated!");
      }
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
      set((state) => ({
        posts: (state.posts = state.posts.filter((post) => post.id !== postId)),
      }));
    } catch (error: any) {
      set((state) => ({ deletingPost: (state.deletingPost = false) }));
      toast.error(error.response.data.message);
    }
  },
}));

export default usePost;
