import { useEffect } from "react";
import useAuth from "../store/useAuth";
import usePost from "../store/usePost";

const usePostEffects = () => {
  const { user } = useAuth((state) => state);
  const { getPosts } = usePost((state) => state);

  useEffect(() => {
    if (user) {
      getPosts(user.token);
    }
  }, [user]);
};

export default usePostEffects;
