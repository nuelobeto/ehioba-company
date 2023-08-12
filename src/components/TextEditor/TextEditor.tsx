import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {
  BackBtn,
  Container,
  FlexBox,
  FormGroup,
  Header,
  SubmitBtn,
  TextEditorWrapper,
} from "./style";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuSave } from "react-icons/lu";
import FileInput from "../file-input/FileInput";
import { BiArrowBack } from "react-icons/bi";
import { AddPostT, PostT } from "../../types/types";
import usePost from "../../store/usePost";
import { toast } from "react-toastify";
import useAuth from "../../store/useAuth";
import { FaSpinner } from "react-icons/fa";

type EditorProps = {
  setOpenTextEditor: React.Dispatch<React.SetStateAction<boolean>>;
  post: PostT | null;
  setPost: React.Dispatch<React.SetStateAction<PostT | null>>;
};

const TextEditor = ({ setOpenTextEditor, post, setPost }: EditorProps) => {
  const { addPost, addingPost, updatePost, updatingPost } = usePost(
    (state) => state
  );
  const { user } = useAuth((state) => state);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<any | null>(null);
  const [category, setCategory] = useState("");
  const [content, setContent] = useState<string>("");

  const handleChange = (value: any) => {
    setContent(value);
  };

  const handleAddPost = () => {
    if (!title || !author || !image || !category || !content) {
      toast.warn("Please Fill all Fields.");
      return;
    }

    if (user) {
      const payload: AddPostT = {
        title,
        author,
        category,
        image,
        content,
      };

      addPost(payload, user.token);
    }
  };

  const handleUpdatePost = () => {
    if (!title || !author || !category || !content) {
      toast.warn("Please Fill all Fields.");
      return;
    }

    if (user) {
      if (post) {
        const payload: AddPostT = {
          title,
          author,
          category,
          image,
          content,
        };

        updatePost(payload, post?.id, user.token);
      }
    }
  };

  const handleCloseEditor = () => {
    setPost(null);
    setOpenTextEditor(false);
  };

  useEffect(() => {
    if (!post) {
      return;
    }
    setTitle(post.title);
    setAuthor(post.author);
    setCategory(post.category);
    setContent(post.content);
  }, [post]);

  return (
    <TextEditorWrapper>
      <Container>
        <Header>
          <h1>Create a New Post</h1>
          <BackBtn onClick={handleCloseEditor}>
            <BiArrowBack />
            <span>Back</span>
          </BackBtn>
        </Header>
        <FormGroup>
          <label>Post Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>

        <FlexBox>
          <FormGroup>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Blog">Blog</option>
              <option value="Insight">Insight</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label>Image:</label>
            <FileInput
              text={!image ? "Upload a Post Image" : image.name}
              setFile={setImage}
            />
          </FormGroup>
        </FlexBox>

        <ReactQuill value={content} onChange={handleChange} />

        {!post ? (
          <SubmitBtn onClick={handleAddPost}>
            Add Post{" "}
            {!addingPost ? (
              <RiSendPlaneFill />
            ) : (
              <FaSpinner className="spinner" />
            )}
          </SubmitBtn>
        ) : (
          <SubmitBtn onClick={handleUpdatePost}>
            Save Post{" "}
            {!updatingPost ? <LuSave /> : <FaSpinner className="spinner" />}
          </SubmitBtn>
        )}
      </Container>
    </TextEditorWrapper>
  );
};

export default TextEditor;
