import styled from "styled-components";
import { COLORS } from "../../utils/colors";

type FileInputT = {
  text: string;
  setFile: React.Dispatch<React.SetStateAction<any>>;
};

const FileInput = ({ text, setFile }: FileInputT) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  return (
    <FileInputWrapper>
      <label htmlFor="file">
        <span>{text}</span>
      </label>
      <input type="file" id="file" onChange={handleChange} />
    </FileInputWrapper>
  );
};

export default FileInput;

const FileInputWrapper = styled.div`
  outline: none;
  border: 1px solid ${COLORS.lightGray};
  background-color: ${COLORS.veryLightGray};
  width: 100%;
  height: 40px;
  border-radius: 12px;
  padding-left: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
  }
`;
