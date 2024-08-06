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
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import css from "@/styles/forms.module.css";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";

const Abmeldung = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { sendAbmeldung } = useFormCalls();

  const screenSmall = useMediaQuery("(max-width:500px)");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitButtonDisabled(true);

    sendAbmeldung(formData).then(() => setSubmitButtonDisabled(false));

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
            Abmeldeformular
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
            name="email"
            label="Firmen e-mail"
            inputProps={{
              type: "email",
            }}
            fullWidth
            required
            value={formData.email || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
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
                />
              }
              label="Urlaub in Zeit Konsumiert"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
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
          <Button
            disabled={submitButtonDisabled}
            type="submit"
            variant="contained"
            color="primary"
          >
            Senden
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Abmeldung;
