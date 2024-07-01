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

const validationScheme = {
  employer: {
    error: false,
    touched: false,
    helperText: "",
  },
};

const Anmeldung = () => {
  const [formData, setFormData] = useState({});
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
      sendAnmeldung(formData);
    }
  };
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Anmeldeformular
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
            label="Betriebstätte (Arbeitsort)"
            required
            fullWidth
            value={formData.workAddress || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            size={screenSmall ? "small" : undefined}
            label="Firmen e-mail"
            required
            inputProps={{
              type: "email",
            }}
            fullWidth
            value={formData.email || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="firstnameDN"
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
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
            size={screenSmall ? "small" : undefined}
            label="Versicherungsnummer DN"
            required
            fullWidth
            value={formData.insuranceNumberDN || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required component="fieldset">
            <FormLabel component="legend">Geschlecht</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="weiblich"
                control={<Radio />}
                label="Weiblich"
              />
              <FormControlLabel
                value="männlich"
                control={<Radio />}
                label="Männlich"
              />
              <FormControlLabel
                value="andere"
                control={<Radio />}
                label="Andere"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="address"
            label="Adresse"
            size={screenSmall ? "small" : undefined}
            required
            fullWidth
            value={formData.address || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="zip"
            size={screenSmall ? "small" : undefined}
            label="PLZ"
            required
            fullWidth
            value={formData.zip || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="city"
            size={screenSmall ? "small" : undefined}
            label="Ort"
            required
            fullWidth
            value={formData.city || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="citizenship"
            size={screenSmall ? "small" : undefined}
            label="Staatsbürgerschaft"
            required
            fullWidth
            value={formData.citizenship || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="iban"
            size={screenSmall ? "small" : undefined}
            label="IBAN"
            fullWidth
            value={formData.iban || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateInput
            filterValue={formData}
            size={screenSmall ? "small" : undefined}
            required={true}
            setFilterValue={setFormData}
            label="Anmeldedatum 1. Arbeitstag"
            name="firstWorkDay"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="jobDescription"
            label="Tätigkeit"
            size={screenSmall ? "small" : undefined}
            placeholder="z.B Taxilenker"
            required
            fullWidth
            value={formData.jobDescription || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="experience"
            size={screenSmall ? "small" : undefined}
            label="Erfahrung Vorjahre"
            fullWidth
            value={formData.experience || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="workingHours"
            label="Arbeitszeit (Stunden-Woche)"
            size={screenSmall ? "small" : undefined}
            required
            fullWidth
            value={formData.workingHours || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
            <InputLabel size={screenSmall ? "small" : undefined} id="group">
              Gruppe
            </InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="group"
              id="demo-select-small"
              size={screenSmall ? "small" : undefined}
              name="gruppe"
              value={formData?.gruppe || ""}
              label="Gruppe"
              onChange={handleChange}
            >
              <MenuItem value={""}>
                <Typography component="em">None</Typography>
              </MenuItem>

              <MenuItem value={"angestellter"}>
                <Typography>Angestellter</Typography>
              </MenuItem>
              <MenuItem value={"arbeiter"}>
                <Typography>Arbeiter</Typography>
              </MenuItem>
              <MenuItem value={"lehrling"}>
                <Typography>Lehrling</Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
            <InputLabel
              size={screenSmall ? "small" : undefined}
              id="insuranceType"
            >
              Versicherungstyp
            </InputLabel>
            <Select
              sx={{ width: "100%" }}
              size={screenSmall ? "small" : undefined}
              labelId="insuranceType"
              id="demo-select-small"
              name="insuranceType"
              value={formData?.insuranceType || ""}
              label="Versicherungstyp"
              onChange={handleChange}
            >
              <MenuItem value={""}>
                <Typography component="em">None</Typography>
              </MenuItem>

              <MenuItem value={"Vollversichert"}>
                <Typography>Vollversichert</Typography>
              </MenuItem>
              <MenuItem value={"Geringfügig"}>
                <Typography>Geringfügig</Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="salary"
            size={screenSmall ? "small" : undefined}
            label="Gehalt - Monat (Brutto)"
            required
            fullWidth
            value={formData.salary || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="note"
            label="Notizen"
            size={screenSmall ? "small" : undefined}
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
            Senden
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Anmeldung;
