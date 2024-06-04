import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  Switch,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

import css from "@/styles/forms.module.css";
import DateInput from "@/components/form-components/DateInput";

const Abmeldung = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Abmeldung
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="employer"
            label="Dienstgeber"
            fullWidth
            required
            value={formData.employer || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="workAddress"
            label="Betriebstätte (Arbeitsort)"
            fullWidth
            required
            value={formData.workAddress || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Firmen e-mail"
            fullWidth
            required
            value={formData.email || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="firstnameDN"
            label="Vorname DN"
            fullWidth
            required
            value={formData.firstnameDN || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="lastnameDN"
            label="Nachname DN"
            fullWidth
            required
            value={formData.lastnameDN || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="insuranceNumberDN"
            label="Versicherungsnummer DN"
            fullWidth
            required
            value={formData.insuranceNumberDN || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateInput
            filterValue={formData}
            setFilterValue={setFormData}
            required={true}
            label="Abmeldedatum (Letzter Arbeitstag)"
            name="lastWorkDay"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.holidayUsed || false}
                  onChange={handleChange}
                  name="holidayUsed"
                  required
                />
              }
              label="Urlaub in Zeit Konsumiert"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="terminationType"
            label="Kündigungsart"
            fullWidth
            required
            value={formData.terminationType || ""}
            onChange={handleChange}
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
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.confirmation || false}
                  onChange={handleChange}
                  name="confirmation"
                  required
                />
              }
              label="Hiermit akzeptiere ich die DSVGO (Dateschutzerklärung)"
            />
          </FormGroup>
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

export default Abmeldung;
