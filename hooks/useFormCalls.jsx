import { toastErrorNotify, toastSuccessNotify } from "@/utils/ToastNotify";
import axios from "axios";

const useFormCalls = () => {
  const sendAnmeldung = async (formData) => {
    try {
      const data = await axios.post("/api/forms/anmeldung", formData);
      toastSuccessNotify(`Eingabe erfolgreich gesendet`);
      console.log("DATA==>", data);
    } catch (error) {
      toastErrorNotify(
        "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut!"
      );
      // toastErrorNotify(
      //   `${error.response.status} ${error.response.data.error} `
      // );
      console.log(error);
    }
  };
  const sendAbmeldung = async (formData) => {
    try {
      const data = await axios.post("/api/forms/abmeldung", formData);
      toastSuccessNotify(`Eingabe erfolgreich gesendet`);

      console.log("DATA==>", data);
    } catch (error) {
      toastErrorNotify(
        "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut!"
      );
      console.log(error);
    }
  };
  const sendUmmeldung = async (formData) => {
    try {
      const data = await axios.post("/api/forms/ummeldung", formData);
      toastSuccessNotify(`Eingabe erfolgreich gesendet`);

      console.log("DATA==>", data);
    } catch (error) {
      toastErrorNotify(
        "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut!"
      );
      console.log(error);
    }
  };

  return { sendAnmeldung, sendAbmeldung, sendUmmeldung };
};

export default useFormCalls;
