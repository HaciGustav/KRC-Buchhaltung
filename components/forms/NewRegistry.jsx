import css from "@/styles/forms.module.css";
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import DateInput from "@/components/form-components/DateInput";
import useFormCalls from "@/hooks/useFormCalls";
import { toastWarnNotify } from "@/utils/ToastNotify";
import { useEffect, useState } from "react";
import FileInput from "../form-components/FileInput";

const NewRegistry = () => {
  const [formData, setFormData] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const screenSmall = useMediaQuery("(max-width:500px)");

  const { sendAnmeldung } = useFormCalls();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    let inputValue = value;

    if (type === "checkbox") {
      inputValue = checked;
    } else if (type === "file") {
      inputValue = event.target.files[0];
    }

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const validateForm = () => {
    let responseFlag = false;
    if (!formData.gruppe) {
      toastWarnNotify("Das Feld 'Gruppe' ist erforderlich!");
    } else if (!formData.insuranceType) {
      toastWarnNotify("Das Feld 'Versicherungstyp' ist erforderlich!");
    } else if (!formData.eCard) {
      toastWarnNotify("Das Feld 'E Card' ist erforderlich!");
    } else if (!formData.meldezettel) {
      toastWarnNotify("Das Feld 'Meldezettel' ist erforderlich!");
    } else if (!formData.reisepass) {
      toastWarnNotify("Das Feld 'Reisepass' ist erforderlich!");
    } else {
      responseFlag = true;
    }
    return responseFlag;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidationOk = validateForm();
    if (isValidationOk) {
      //  setSubmitButtonDisabled(true);
      sendAnmeldung(formData).then(() => setSubmitButtonDisabled(false));
    }
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Anmeldeformular
      </Typography>{" "}
      <div className={css.flex_column}>
        <div className={css.flex}>
          <TextField
            size={screenSmall ? "small" : undefined}
            name="employer"
            label="Dienstgeber"
            required
            fullWidth
            value={formData.employer || ""}
            onChange={handleChange}
          />

          <TextField
            name="workAddress"
            size={screenSmall ? "small" : undefined}
            label="Betriebstätte (Arbeitsort)"
            required
            fullWidth
            value={formData.workAddress || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
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
          <div className={css.flex} />
        </div>
        <div className={css.flex}>
          <TextField
            name="firstnameDN"
            size={screenSmall ? "small" : undefined}
            label="Vorname DN"
            required
            fullWidth
            value={formData.firstnameDN || ""}
            onChange={handleChange}
          />
          <TextField
            name="lastnameDN"
            size={screenSmall ? "small" : undefined}
            label="Nachname DN"
            required
            fullWidth
            value={formData.lastnameDN || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            name="insuranceNumberDN"
            size={screenSmall ? "small" : undefined}
            label="Versicherungsnummer DN"
            required
            fullWidth
            value={formData.insuranceNumberDN || ""}
            onChange={handleChange}
          />

          <div className={css.flex} />
        </div>
        <div className={css.flex}>
          <FormControl sx={{ minWidth: 120, width: "calc(100% - 5px)" }}>
            <InputLabel size={screenSmall ? "small" : undefined} id="group">
              Familienzustand
            </InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="group"
              id="demo-select-small"
              size={screenSmall ? "small" : undefined}
              name="maritalStatus"
              value={formData?.maritalStatus || ""}
              label="Familienzustand"
              onChange={handleChange}
            >
              <MenuItem value={""}>
                <Typography component="em">None</Typography>
              </MenuItem>

              <MenuItem value={"ledig"}>
                <Typography>Ledig</Typography>
              </MenuItem>
              <MenuItem value={"verheiratet"}>
                <Typography>Verheiratet</Typography>
              </MenuItem>
              <MenuItem value={"sonstiges"}>
                <Typography>Sonstiges</Typography>
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl required component="fieldset" fullWidth>
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
        </div>
        <div className={css.flex}>
          <TextField
            name="address"
            label="Adresse"
            size={screenSmall ? "small" : undefined}
            required
            fullWidth
            value={formData.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            name="zip"
            size={screenSmall ? "small" : undefined}
            label="PLZ"
            required
            fullWidth
            value={formData.zip || ""}
            onChange={handleChange}
          />
          <TextField
            name="city"
            size={screenSmall ? "small" : undefined}
            label="Ort"
            required
            fullWidth
            value={formData.city || ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.flex}>
          <TextField
            name="citizenship"
            size={screenSmall ? "small" : undefined}
            label="Staatsbürgerschaft"
            required
            fullWidth
            value={formData.citizenship || ""}
            onChange={handleChange}
          />
          <TextField
            name="iban"
            size={screenSmall ? "small" : undefined}
            label="IBAN"
            fullWidth
            value={formData.iban || ""}
            onChange={handleChange}
            sx={{ textTransform: "uppercase" }}
          />
        </div>

        <div className={css.flex}>
          <DateInput
            filterValue={formData}
            size={screenSmall ? "small" : undefined}
            required={true}
            setFilterValue={setFormData}
            label="Anmeldedatum 1. Arbeitstag"
            name="firstWorkDay"
          />
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
        </div>
        <div className={css.flex}>
          <TextField
            name="workingHours"
            label="Arbeitszeit (Stunden-Woche)"
            size={screenSmall ? "small" : undefined}
            required
            fullWidth
            value={formData.workingHours || ""}
            onChange={handleChange}
          />

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
        </div>
        <div className={css.flex}>
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
          <div className={css.flex} />
        </div>
        <div className={css.flex}>
          <TextField
            name="salary"
            size={screenSmall ? "small" : undefined}
            label="Gehalt - Monat (Brutto)"
            required
            fullWidth
            value={formData.salary || ""}
            onChange={handleChange}
            disabled={formData.minWage}
          />{" "}
          <FormControlLabel
            sx={{ width: "100%" }}
            control={
              <Checkbox
                checked={formData.minWage || false}
                onChange={handleChange}
                name="minWage"
              />
            }
            label="Kollektivvertrag (Mindestlohn)"
          />
        </div>

        <div className={css.flex}>
          <FileInput
            id="eCard"
            name="eCard"
            label="E Card"
            handleChange={handleChange}
            value={formData.eCard}
          />
          <FileInput
            id="meldezettel"
            name="meldezettel"
            label="Meldezettel"
            handleChange={handleChange}
            value={formData.meldezettel}
          />
          <FileInput
            id="reisepass"
            name="reisepass"
            label="Reisepass"
            handleChange={handleChange}
            value={formData.reisepass}
          />
          <div className={css.flex} />
        </div>
        <div className={css.flex}>
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
        </div>
        <div className={css.flex}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.confirmation || false}
                onChange={handleChange}
                name="confirmation"
                required
              />
            }
            label={
              <span>
                Hiermit akzeptiere ich die{" "}
                <a href="/dsvgo"> DSVGO (Dateschutzerklärung)</a>
              </span>
            }
          />
        </div>

        <Button
          disabled={submitButtonDisabled}
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: "flex-start" }}
        >
          Senden
        </Button>
      </div>
    </form>
  );
};

export default NewRegistry;
