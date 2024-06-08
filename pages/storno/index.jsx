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
} from "@mui/material";
import { useState } from "react";

import css from "@/styles/forms.module.css";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";

const Storno = () => {
  const [formData, setFormData] = useState({});
  const { sendStorno } = useFormCalls();

  const handleSubmit = async (event) => {
    event.preventDefault();
    sendStorno(formData);

    // console.log("Form Data:", formData);
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Stornierungsformular
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="employer"
            label="Dienstgeber"
            required
            fullWidth
            value={formData.employer || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="workAddress"
            label="Betriebstätte (Arbeitsort)"
            required
            fullWidth
            value={formData.workAddress}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Firmen e-mail"
            required
            fullWidth
            value={formData.email || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="firstnameDN"
            label="Vorname DN"
            required
            fullWidth
            value={formData.firstnameDN || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="lastnameDN"
            label="Nachname DN"
            required
            fullWidth
            value={formData.lastnameDN || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="insuranceNumberDN"
            label="Versicherungsnummer DN"
            required
            fullWidth
            value={formData.insuranceNumberDN || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required component="fieldset">
            <FormLabel component="legend">Stornierung von:</FormLabel>
            <RadioGroup
              name="cancellationType"
              value={formData.cancellationType || ""}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="anmeldung"
                control={<Radio />}
                label="Anmeldung"
              />
              <FormControlLabel
                value="abmeldung"
                control={<Radio />}
                label="Abmeldung"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateInput
            filterValue={formData}
            required={true}
            setFilterValue={setFormData}
            label="Gesendete Nachricht Datum"
            name="mailSentAt"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="note"
            label="Notizen"
            fullWidth
            multiline
            rows={4}
            value={formData.note || ""}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Storno;
