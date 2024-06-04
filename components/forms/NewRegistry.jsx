import css from "@/styles/forms.module.css";
import { TextField } from "@mui/material";

const NewRegistry = () => {
  return (
    <form
      style={{
        paddingInline: "1rem",
        display: "flex",
        flexDirection: "column",
        rowGap: "1.5rem",
      }}
    >
      <h3>Anmeldung Dienstnehmer</h3>
      <div className={css.flex}>
        <TextField
          sx={{ width: "45%" }}
          size="small"
          label="Dienstgeber"
          variant="outlined"
        />
        <TextField
          sx={{ width: "45%" }}
          size="small"
          label="Betriebstätte (Arbeitsort)"
          variant="outlined"
        />
      </div>

      <div className={css.flex}>
        <TextField
          sx={{ width: "45%" }}
          size="small"
          label="Vorname DN"
          variant="standard"
        />
        <TextField
          sx={{ width: "45%" }}
          size="small"
          label="Nachname DN"
          variant="standard"
        />
      </div>
      <div className={css.flex}>
        <TextField
          sx={{ width: "45%" }}
          size="small"
          label="Versicherungsnummer DN"
          variant="standard"
        />
        <TextField
          sx={{ width: "45%" }}
          size="small"
          label="Firmen e-mail"
          variant="standard"
        />
      </div>
      <div className={css.flex}>
        <TextField
          sx={{ width: "100%" }}
          size="small"
          label="Staatsbürgerschaft"
          variant="standard"
        />
        {/* TODO: Gender Dropdown */}
        <TextField
          sx={{ width: "100%" }}
          size="small"
          label="Geschlecht"
          variant="standard"
        />
      </div>
      <div className={css.flex}>
        <TextField
          sx={{ width: "100%" }}
          size="small"
          label="Adresse"
          variant="standard"
        />
      </div>
      <div className={css.flex}>
        <TextField
          sx={{ width: "100%" }}
          size="small"
          label="PLZ"
          variant="standard"
        />
        <TextField
          sx={{ width: "100%" }}
          size="small"
          label="Ort"
          variant="standard"
        />
      </div>
      <div className={css.flex}>
        <TextField
          sx={{ width: "100%" }}
          size="small"
          label="IBAN"
          variant="standard"
        />
        <TextField
          sx={{ width: "100%" }}
          size="small"
          label="Anmeldedatum 1. Arbeitstag"
          variant="standard"
        />
      </div>
    </form>
  );
};

export default NewRegistry;
