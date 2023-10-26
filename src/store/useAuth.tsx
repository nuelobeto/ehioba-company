import { create } from "zustand";
import authServices from "../services/authServices";
import { LoginT, RegisterT, ResetPasswordT, UserT } from "../types/types";
import { toast } from "react-toastify";

type UserStateT = {
  user: null | UserT;
  loading: boolean;
  error: string;
  login: (payload: LoginT) => void;
  register: (payload: RegisterT) => void;
  resetPassword: (payload: ResetPasswordT) => void;
  logout: () => void;
};

const savedUser: string | null = localStorage.getItem("user");
const parsedUser: UserT | undefined = savedUser
  ? JSON.parse(savedUser)
  : undefined;

const useAuth = create<UserStateT>((set) => ({
  user: parsedUser ? parsedUser : null,
  loading: false,
  error: "",

  setUser: (user: null | UserT) => {
    set((state) => ({ user: (state.user = user) }));
  },

  login: async (payload: LoginT) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      const user = await authServices.login(payload);
      set((state) => ({ loading: (state.loading = false) }));
      set((state) => ({ user: (state.user = user) }));
    } catch (error: any) {
      set((state) => ({ loading: (state.loading = false) }));
      toast.error(error.response.data.message);
    }
  },

  register: async (payload: RegisterT) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      const user = await authServices.register(payload);
      set((state) => ({ loading: (state.loading = false) }));
      set((state) => ({ user: (state.user = user) }));
    } catch (error: any) {
      set((state) => ({ loading: (state.loading = false) }));
      toast.error(error.response.data.message);
    }
  },

  resetPassword: async (payload: ResetPasswordT) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      const user = await authServices.resetPassword(payload);
      set((state) => ({ loading: (state.loading = false) }));
      set((state) => ({ user: (state.user = user) }));
    } catch (error: any) {
      set((state) => ({ loading: (state.loading = false) }));
      toast.error(error.response.data.message);
    }
  },

  logout: async () => {
    try {
      authServices.logout();
      set((state) => ({ user: (state.user = null) }));
    } catch (error: any) {
      console.log(error);
    }
  },
}));

export default useAuth;
