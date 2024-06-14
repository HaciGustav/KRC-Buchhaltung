import { TextField } from "@mui/material";
import React, { useState } from "react";
import css from "@/styles/forms.module.css";

const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
let validDate = "31.01.2024";

const dateValidation = (date) => {
  const months31 = [1, 3, 5, 7, 8, 10, 12];

  if (Number(date[0]) === 3 && Number(date[1]) > 3) return;
};

const DateInput = ({
  filterValue,
  setFilterValue,
  label,
  name,
  required,
  size,
}) => {
  const handleChange = (e) => {
    const { value: val } = e.target;
    if (Number(val[0]) === 3 && Number(val[1]) > 1) return;
    if (Number(val[0]) > 3) return;
    if (Number(val[2]) > 1) return;
    if (val.length < 6 && val.slice(-1) === ".") {
      setFilterValue({ ...filterValue, [name]: val.slice(0, 2) });
    }
    if (val.length > 5 && val.slice(-1) === ".") {
      setFilterValue({ ...filterValue, [name]: val.slice(0, 5) });
    }
    if (isNaN(val.slice(-1))) return;
    if (val.length > 2 && !val.includes(".")) {
      let edited = val.slice(0, 2) + "." + val.slice(2);

      setFilterValue({ ...filterValue, [name]: edited });
    } else if (val.length > 5 && val.lastIndexOf(".") === 2) {
      let edited = val.slice(0, 5) + "." + val.slice(5);
      setFilterValue({ ...filterValue, [name]: edited });
    } else if (val.length < 11) {
      if (Number(val[3] > 1)) return;
      if (Number(val[3]) !== 0 && Number(val[4] > 2)) return;
      setFilterValue({ ...filterValue, [name]: val });
    }
  };
  return (
    <TextField
      onChange={handleChange}
      className={css.dateinput}
      name={name}
      required={required}
      value={filterValue[name] || ""}
      label={label}
      placeholder="DD.MM.YYYY"
      variant="outlined"
      size={size}
    />
  );
};

export default DateInput;
