import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorSetup = ({ description, handleDescription }) => {
  return (
    <ReactQuill
      theme="snow"
      value={description}
      onChange={handleDescription}
      col={3}
    />
  );
};

export default EditorSetup;
