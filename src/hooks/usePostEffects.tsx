import { useEffect } from "react";
import usePost from "../store/usePost";

const usePostEffects = () => {
  const { getPosts } = usePost((state) => state);

  useEffect(() => {
    getPosts();
  }, []);
};

export default usePostEffects;
