import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { TextEditorWrapper } from "./style";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: any) => {
    setContent(value);
  };

  console.log(content);

  return (
    <TextEditorWrapper>
      <ReactQuill
        value={content}
        onChange={handleChange}
        style={{ height: "100%" }}
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
