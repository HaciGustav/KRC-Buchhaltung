import css from "@/styles/forms.module.css";
import { Typography } from "@mui/material";

const Dsvgo = () => {
  return (
    <div className={css.container}>
      <Typography variant="h4" gutterBottom>
        DATENSCHUTZERKLÄRUNG
      </Typography>

      <div className={css.flex_column}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Kontaktformular
        </Typography>
        <Typography>
          Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns
          aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns
          gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Registrierung
        </Typography>
        <Typography>
          Bei einer Registrierung wird die E-Mail-Adresse des Nutzers sowie ein
          Passwort gespeichert. Sofern in der Folge ein Kauf erfolgt, wird die
          E-Mail-Adresse mit den beim Kaufvorgang ermittelten Daten verknüpft.
          Die von Ihnen bereit gestellten Daten sind zur Einrichtung des
          Nutzeraccounts erforderlich. Die Datenverarbeitung erfolgt für die
          Dauer des Bestehens des Nutzeraccounts. Bei Löschung des
          Nutzeraccounts erfolgt eine Löschung der E-Mail-Adresse und des
          Passworts.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          IT-Sicherheit
        </Typography>
        <Typography>
          Beim Besuch dieser Website werden darüber hinaus Logfiles gespeichert,
          welche die IP-Adresse und sonstige Daten zum Zugriff auf die Website
          enthalten (z. B. Datum, Uhrzeit, UserAgent, Referer). Die
          Datenverarbeitung erfolgt zeitlich befristet (maximal 30 Tage) und nur
          zur Absicherung vor DDOS Attacken oder sonstigen Eingriffen in die
          Funktionalität der Website sowie der allenfalls dahinterliegenden
          Datenbanksysteme.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Rechtsgrundlage für die Datenverarbeitung:
        </Typography>
        <Typography>
          Auf der Website werden Daten ausschließlich auf Grundlage der
          gesetzlichen Bestimmungen (DSGVO, TKG 2003) verarbeitet. Die
          Datenverarbeitung (Webshop, Produktbewertungen, Buchungstool und
          Nutzeraccount) erfolgt auf Grundlage des Art 6 Abs. 1 lit. b)
          (Vertragserfüllungszwecke) DSGVO. Im Falle des Einsatzes von
          Analysetools erfolgt die Datenverwendung auf Grundlage des Art 6 Abs.
          1 lit f) (berechtigtes Interesse) DSGVO. Das berechtigte Interesse an
          der Datenverwendung ist die Verbesserung des Webauftritts sowie die
          Erfolgsmessung von Online-Werbung. Der Einsatz von
          IT-Datensicherheitsmaßnahmen erfolgt ebenfalls auf Grundlage des Art 6
          Abs. 1 lit f) (berechtigtes Interesse) DSGVO. Das berechtigte
          Interesse an der Datenverwendung ist die Absicherung der eigenen
          IT-Systeme. Der Einsatz von Social-Media-Plugins erfolgt nur nach
          Einwilligung. Rechtsgrundlage ist daher Art. 6 Abs. 1 lit a) DSGVO.
          Die Einwilligung ist bei jedem Website-Aufruf erneut zu erteilen.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Ihre Rechte
        </Typography>
        <Typography>
          Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit,
          Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung
          Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
          datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden
          sind, können Sie sich bei der Aufsichtsbehörde beschweren. In
          Österreich ist dies die Datenschutzbehörde.
        </Typography>
      </div>
    </div>
  );
};

export default Dsvgo;
