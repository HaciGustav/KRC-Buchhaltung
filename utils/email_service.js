const template = `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Empfangsbestätigung</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 20px 0;
      }
      .content p {
        margin: 10px 0;
      }
      .data-section {
        margin-bottom: 20px;
      }
      .data-section h2 {
        font-size: 18px;
        margin-bottom: 10px;
        color: #555;
      }
      .data-section p {
        margin: 5px 0;
        padding-left: 10px;
        border-left: 3px solid #ddd;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #777;
        border-top: 1px solid #ddd;
        padding-top: 10px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Empfangsbestätigung</h1>
      </div>
      <div class="content">
        <p>Sehr geehrte Damen und Herren,</p>
        <p>
          vielen Dank für den Versand Ihrer Anmeldung. Wir bestätigen Ihnen
          hiermit den Eingang Ihrer Nachricht. Folgende Daten haben wir von
          Ihnen erhalten.
        </p>

        <div class="data-section">
          <h2>ANGABEN ZUR PERSON/DIENSTNEHMER</h2>
          <p><strong>Firma/Dienstgeber:</strong> Evet GmbH</p>
          <p><strong>Firma/Betriebsstätte/Arbeitsort:</strong> Laubeplatz</p>
          <p><strong>Vorname:</strong> Nezahat</p>
          <p><strong>Nachname:</strong> Sert</p>
          <p><strong>Versicherungsnummer:</strong> 4202200877</p>
          <p><strong>Geschlecht:</strong> Weiblich</p>
          <p><strong>Adresse:</strong> Rosa-Jochmann-Ring 1/3/26</p>
          <p><strong>PLZ Ort:</strong> 1110 Wien</p>
          <p><strong>Staatsbürgerschaft:</strong> Türkei</p>
        </div>

        <div class="data-section">
          <h2>ANGABEN ZUM BESCHÄFTIGUNGSVERHÄLTNIS</h2>
          <p><strong>Anmeldedatum:</strong> 2024-03-18</p>
          <p><strong>Beschäftigung:</strong> Verkäuferin</p>
          <p><strong>Gruppe:</strong> Evet GmbH</p>
          <p><strong>Arbeitszeit pro Woche:</strong> 20 Stunden</p>
          <p><strong>Monatsgehalt in Euro/Brutto:</strong></p>
        </div>

        <div class="data-section">
          <h2>ANGABEN DES ZAHLUNGSEMPFÄNGERS</h2>
          <p><strong>Kontoinhaber/in:</strong> Nezahat Sert</p>
          <p><strong>IBAN:</strong> AT 47 1200 0500 1439 3300</p>
          <p><strong>BIC:</strong></p>
          <p><strong>Name der Bank:</strong></p>
        </div>

        <div class="data-section">
          <h2>SONSTIGE ANGABEN</h2>
          <p><strong>E-Mail:</strong> office@evet.co.at</p>
          <p>
            <strong>Betreff:</strong> Evet GmbH - 2024-03-18 - Anmeldung -
            Nezahat Sert - 20 Stunden
          </p>
          <p><strong>Notizen:</strong></p>
        </div>

        <p>
          Diese Angaben wurden über ein Anmeldeformular auf
          CIGUBIGULE
          gesendet!
        </p>
      </div>
      <div class="footer">
        <p>&copy; 2024 KRC Buchhaltungskanzlei KG</p>
      </div>
    </div>
  </body>
</html>

`;

// const mailAnmeldung = ()=>;
// const mailAbmeldung = ()=>;
// const mailUmmeldung = ()=>;

export const createMail = (receiver, subject, text, formData) => {
  const template = `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Empfangsbestätigung</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        display:flex;
 justify-content: space-between;
 align-items:center;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .header img {
        width:150px;
        height:150px;
      }
      .content {
        padding: 20px 0;
      }
      .content p {
        margin: 10px 0;
      }
      .data-section {
        margin-bottom: 20px;
      }
      .data-section h2 {
        font-size: 18px;
        margin-bottom: 10px;
        color: #555;
      }
      .data-section p {
        margin: 5px 0;
        padding-left: 10px;
        border-left: 3px solid #ddd;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #777;
        border-top: 1px solid #ddd;
        padding-top: 10px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
       <img src="https://github.com/HaciGustav/KRC-Buchhaltung/blob/main/public/assets/logo.png?raw=true" alt="Company Logo">
        <h1>Empfangsbestätigun</h1>
      </div>
      <div class="content">
        <p>Sehr geehrte Damen und Herren,</p>
        <p>
          vielen Dank für den Versand Ihrer Anmeldung. Wir bestätigen Ihnen
          hiermit den Eingang Ihrer Nachricht. Folgende Daten haben wir von
          Ihnen erhalten.
        </p>

        <div class="data-section">
          <h2>ANGABEN ZUR PERSON/DIENSTNEHMER</h2>
          <p><strong>Firma/Dienstgeber:</strong> ${formData.employer}</p>
          <p><strong>Firma/Betriebsstätte/Arbeitsort:</strong> ${formData.workAddress}</p>
          <p><strong>Vorname:</strong> ${formData.firstnameDN}</p>
          <p><strong>Nachname:</strong> ${formData.lastnameDN}</p>
          <p><strong>Versicherungsnummer:</strong> ${formData.insuranceNumberDN}</p>
          <p><strong>Geschlecht:</strong> ${formData.gender}</p>
          <p><strong>Adresse:</strong> ${formData.address}</p>
          <p><strong>PLZ Ort:</strong> ${formData.zip} ${formData.city}</p>
          <p><strong>Staatsbürgerschaft:</strong> ${formData.citizenship}</p>
        </div>

        <div class="data-section">
          <h2>ANGABEN ZUM BESCHÄFTIGUNGSVERHÄLTNIS</h2>
          <p><strong>Anmeldedatum:</strong> ${formData.firstWorkDay}</p>
          <p><strong>Beschäftigung:</strong> ${formData.jobDescription} </p>
          <p><strong>Gruppe:</strong> ${formData.gruppe}</p>
          <p><strong>Arbeitszeit pro Woche:</strong> ${formData.workingHours}</p>
          <p><strong>Monatsgehalt in Euro/Brutto:</strong> ${formData.salary} </p>
        </div>

        <div class="data-section">
          <h2>ANGABEN DES ZAHLUNGSEMPFÄNGERS</h2>
          
          <p><strong>IBAN:</strong> ${formData.iban}</p>
        </div>

        <div class="data-section">
          <h2>SONSTIGE ANGABEN</h2>
          <p><strong>Notizen:</strong> ${formData.note}</p>
        </div>

        <p>
          Diese Angaben wurden über ein Anmeldeformular auf
          CIGUBIGULE
          gesendet!
        </p>
      </div>
      <div class="footer">
        <p>&copy; 2024 KRC Buchhaltungskanzlei KG</p>
      </div>
    </div>
  </body>
</html>

`;

  const message = {
    from: "office@krc-k.at",
    to: [receiver],
    // to: [receiver, "office@krc-k.at"],
    subject: subject,
    text: text,
    html: template,
  };
  return message;
};
