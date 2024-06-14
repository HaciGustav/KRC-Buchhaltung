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
        <p>&copy; ${new Date().getFullYear()} KRC Buchhaltungskanzlei KG</p>
      </div>
    </div>
  </body>
</html>

`;

// const mailAnmeldung = ()=>;
// const mailAbmeldung = ()=>;
// const mailUmmeldung = ()=>;

const mailBase = (body) => `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div>
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
        justify-content: center;
        column-gap:20px;flex-wrap:wrap;

        align-items:center;
        width:100%;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
      }
 .header img {
        width:100px;
        height:90px;
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
 ${body}
</html>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
`;

export const createMail = (formType, receiver, subject, text, formData) => {
  const anmeldungBody = `
 <body>
    <div class="container">
      <div class="header">
       <img src="https://raw.githubusercontent.com/HaciGustav/KRC-Buchhaltung/main/public/assets/logo.png" alt="Company Logo">
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
          <p><strong>Firma/Dienstgeber:</strong> ${formData.employer || ""}</p>
          <p><strong>Firma/Betriebsstätte/Arbeitsort:</strong> ${
            formData.workAddress || ""
          }</p>
          <p><strong>Vorname:</strong> ${formData.firstnameDN || ""}</p>
          <p><strong>Nachname:</strong> ${formData.lastnameDN || ""}</p>
          <p><strong>Versicherungsnummer:</strong> ${
            formData.insuranceNumberDN || ""
          }</p>
          <p><strong>Geschlecht:</strong> ${formData.gender || ""}</p>
          <p><strong>Adresse:</strong> ${formData.address || ""}</p>
          <p><strong>PLZ Ort:</strong> ${formData.zip || ""} ${
    formData.city || ""
  }</p>
          <p><strong>Staatsbürgerschaft:</strong> ${
            formData.citizenship || ""
          }</p>
        </div>

        <div class="data-section">
          <h2>ANGABEN ZUM BESCHÄFTIGUNGSVERHÄLTNIS</h2>
          <p><strong>Anmeldedatum:</strong> ${formData.firstWorkDay || ""}</p>
          <p><strong>Beschäftigung:</strong> ${
            formData.jobDescription || ""
          } </p>
          <p><strong>Gruppe:</strong> ${formData.gruppe || ""}</p>
          <p><strong>Arbeitszeit pro Woche:</strong> ${
            formData.workingHours || ""
          }</p>
          <p><strong>Monatsgehalt in Euro/Brutto:</strong> ${
            formData.salary || ""
          } </p>
        </div>

        <div class="data-section">
          <h2>ANGABEN DES ZAHLUNGSEMPFÄNGERS</h2>
          
          <p><strong>IBAN:</strong> ${formData.iban || ""}</p> 
        </div>

        <div class="data-section">
          <h2>SONSTIGE ANGABEN</h2>
          <p><strong>Notizen:</strong> ${formData.note || ""}</p>
        </div>

        <p>
          Diese Angaben wurden über ein Anmeldeformular auf
          www.krc-k.at
          gesendet!
        </p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} KRC Buchhaltungskanzlei KG</p>
      </div>
    </div>
  </body>
`;
  const abmeldungBody = `
 <body>
    <div class="container">
      <div class="header">
       <img src="https://raw.githubusercontent.com/HaciGustav/KRC-Buchhaltung/main/public/assets/logo.png" alt="Company Logo">
        <h1>Empfangsbestätigung</h1>
      </div>
      <div class="content">
        <p>Sehr geehrte Damen und Herren,</p>
        <p>
          vielen Dank für den Versand Ihrer Abmeldung. Wir bestätigen Ihnen
          hiermit den Eingang Ihrer Nachricht. Folgende Daten haben wir von
          Ihnen erhalten.
        </p>

        <div class="data-section">
          <h2>ANGABEN ZUR PERSON/DIENSTNEHMER</h2>
          <p><strong>Firma/Dienstgeber:</strong> ${formData.employer || ""}</p> 
          <p><strong>Firma/Betriebsstätte/Arbeitsort:</strong> ${
            formData.workAddress || ""
          }</p>
          <p><strong>Vorname:</strong> ${formData.firstnameDN || ""}</p> 
          <p><strong>Nachname:</strong> ${formData.lastnameDN || ""}</p> 
          <p><strong>Versicherungsnummer:</strong> ${
            formData.insuranceNumberDN || ""
          }</p>
        </div>

        <div class="data-section">
          <h2>ANGABEN ZUM BESCHÄFTIGUNGSVERHÄLTNIS</h2>
          <p><strong>Abmeldedatum:</strong> ${formData.lastWorkDay || ""}</p> 
          <p><strong>Urlaub in Zeit konsumiert:</strong> ${
            formData.holidayUsed ? "Ja" : "Nein"
          } </p>
          <p><strong>Kündigungsart:</strong> ${
            formData.terminationType || ""
          }</p> 
        </div>

        <div class="data-section">
          <h2>SONSTIGE ANGABEN</h2>
          <p><strong>Notizen:</strong> ${formData.note || ""}</p> 
        </div>

        <p>
          Diese Angaben wurden über ein Abmeldeformular auf
          www.krc-k.at
          gesendet!
        </p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} KRC Buchhaltungskanzlei KG</p>
      </div>
    </div>
  </body>
`;
  const aenderungBody = `
<body>
   <div class="container">
     <div class="header">
      <img src="https://raw.githubusercontent.com/HaciGustav/KRC-Buchhaltung/main/public/assets/logo.png" alt="Company Logo">
       <h1>Empfangsbestätigung</h1>
     </div>
     <div class="content">
       <p>Sehr geehrte Damen und Herren,</p>
       <p>
         vielen Dank für den Versand Ihrer Änderung. Wir bestätigen Ihnen
         hiermit den Eingang Ihrer Nachricht. Folgende Daten haben wir von
         Ihnen erhalten.
       </p>

       <div class="data-section">
         <h2>ANGABEN ZUR PERSON/DIENSTNEHMER</h2>
         <p><strong>Firma/Dienstgeber:</strong> ${formData.employer || ""}</p> 
         <p><strong>Firma/Betriebsstätte/Arbeitsort:</strong> ${
           formData.workAddress || ""
         }</p>
         <p><strong>Vorname:</strong> ${formData.firstnameDN || ""}</p> 
         <p><strong>Nachname:</strong> ${formData.lastnameDN || ""}</p> 
         <p><strong>Versicherungsnummer:</strong> ${
           formData.insuranceNumberDN || ""
         }</p>
         <p><strong>Geschlecht:</strong> ${formData.gender || ""}</p> 
         <p><strong>Adresse:</strong> ${formData.address || ""}</p> 
         <p><strong>PLZ Ort:</strong> ${formData.zip || ""} ${
    formData.city || ""
  }</p> 
         <p><strong>Staatsbürgerschaft:</strong> ${
           formData.citizenship || ""
         }</p>
       </div>

       <div class="data-section">
         <h2>ANGABEN ZUM BESCHÄFTIGUNGSVERHÄLTNIS</h2>
         <p><strong>Anmeldedatum:</strong> ${formData.firstWorkDay || ""}</p> 
         <p><strong>Beschäftigung:</strong> ${
           formData.jobDescription || ""
         } </p> 
         <p><strong>Gruppe:</strong> ${formData.gruppe || ""}</p> 
         <p><strong>Arbeitszeit pro Woche:</strong> ${
           formData.workingHours || ""
         }</p> 
         <p><strong>Monatsgehalt in Euro/Brutto:</strong> ${
           formData.salary || ""
         } </p>
       </div>

       <div class="data-section">
         <h2>ANGABEN DES ZAHLUNGSEMPFÄNGERS</h2>
         
         <p><strong>IBAN:</strong> ${formData.iban || ""}</p> 
       </div>

       <div class="data-section">
         <h2>SONSTIGE ANGABEN</h2>
         <p><strong>Notizen:</strong> ${formData.note || ""}</p> 
       </div>

       <p>
         Diese Angaben wurden über ein Änderungsformular auf
         www.krc-k.at
         gesendet!
       </p>
     </div>
     <div class="footer">
       <p>&copy; ${new Date().getFullYear()} KRC Buchhaltungskanzlei KG</p>
     </div>
   </div>
 </body>
`;
  const stornoBody = `
 <body>
    <div class="container">
      <div class="header">
       <img src="https://raw.githubusercontent.com/HaciGustav/KRC-Buchhaltung/main/public/assets/logo.png" alt="Company Logo">
        <h1>Empfangsbestätigung</h1>
      </div>
      <div class="content">
        <p>Sehr geehrte Damen und Herren,</p>
        <p>
          vielen Dank für den Versand Ihres Formulars. Wir bestätigen Ihnen
          hiermit den Eingang Ihrer Nachricht. Folgende Daten haben wir von
          Ihnen erhalten.
        </p>

        <div class="data-section">
          <h2>ANGABEN ZUR PERSON/DIENSTNEHMER</h2>
          <p><strong>Firma/Dienstgeber:</strong> ${formData.employer || ""}</p> 
          <p><strong>Firma/Betriebsstätte/Arbeitsort:</strong> ${
            formData.workAddress || ""
          }</p>
          <p><strong>Vorname:</strong> ${formData.firstnameDN || ""}</p> 
          <p><strong>Nachname:</strong> ${formData.lastnameDN || ""}</p> 
          <p><strong>Versicherungsnummer:</strong> ${
            formData.insuranceNumberDN || ""
          }</p>
          <p><strong>An oder Abmeldung:</strong> ${
            formData.cancellationType || ""
          }</p>
          <p><strong>Gesendete Nachricht Datum:</strong> ${
            formData.mailSentAt || ""
          }</p>
        </div>

        <div class="data-section">
          <h2>SONSTIGE ANGABEN</h2>
          <p><strong>Notizen:</strong> ${formData.note || ""}</p> 
        </div>

        <p>
          Diese Angaben wurden auf
          www.krc-k.at
          gesendet!
        </p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} KRC Buchhaltungskanzlei KG</p>
      </div>
    </div>
  </body>
`;

  let template = null;
  if (formType === "anmeldung") template = mailBase(anmeldungBody);
  else if (formType === "abmeldung") template = mailBase(abmeldungBody);
  else if (formType === "aenderung") template = mailBase(aenderungBody);
  else if (formType === "storno") template = mailBase(stornoBody);

  const message = {
    from: "office@krc-k.at",
    to: [receiver, "office@krc-k.at", "lohn1@krc-k.at"],
    subject: subject,
    text: text,
    html: template,
  };
  return message;
};
