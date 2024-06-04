import axios from "axios";

const useFormCalls = () => {
  const sendAnmeldung = async (formData) => {
    try {
      const data = await axios.post("/api/forms/anmeldung", {});
      console.log("DATA==>", data);
    } catch (error) {
      console.log(error);
    }
  };
  const sendAbmeldung = async (formData) => {
    try {
      const data = await axios.post("/api/forms/abmeldung", {});
      console.log("DATA==>", data);
    } catch (error) {
      console.log(error);
    }
  };
  const sendUmmeldung = async (formData) => {
    try {
      const data = await axios.post("/api/forms/ummeldung", {});
      console.log("DATA==>", data);
    } catch (error) {
      console.log(error);
    }
  };

  return { sendAnmeldung, sendAbmeldung, sendUmmeldung };
};

export default useFormCalls;
