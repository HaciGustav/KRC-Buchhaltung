import { Button, Typography } from "@mui/material";
import { useState } from "react";
import css from "@/styles/forms.module.css";

const FileInput = ({ id, label, name, value, handleChange }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      if (handleChange) handleChange(event);
    }
  };

  return (
    <>
      <input
        id={"file-upload" + name}
        type="file"
        accept="image/*, application/pdf"
        style={{ display: "none", width: "100%" }}
        onChange={handleFileChange}
        name={name}
      />
      <label
        htmlFor={"file-upload" + name}
        className={css.flex_column}
        style={{ rowGap: "5px" }}
      >
        <Button variant="contained" fullWidth component="span">
          {label}
        </Button>
        {fileName && <Typography variant="body2">{fileName}</Typography>}
      </label>
    </>
  );
};
export default FileInput;
