import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Grid,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormGroup,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import css from "@/styles/forms.module.css";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";
import { toastWarnNotify } from "@/utils/ToastNotify";
import NewRegistry from "@/components/forms/NewRegistry";

const validationScheme = {
  employer: {
    error: false,
    touched: false,
    helperText: "",
  },
};

const Anmeldung = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const screenSmall = useMediaQuery("(max-width:500px)");

  const { sendAnmeldung } = useFormCalls();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.gruppe) {
      toastWarnNotify("Das Feld 'Gruppe' ist erforderlich!");
    } else if (!formData.insuranceType) {
      toastWarnNotify("Das Feld 'Versicherungstyp' ist erforderlich!");
    } else {
      setSubmitButtonDisabled(true);
      sendAnmeldung(formData).then(() => setSubmitButtonDisabled(false));
    }
    console.log(submitButtonDisabled);
  };
  return <NewRegistry />;
};

export default Anmeldung;
