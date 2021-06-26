import dotenv from "dotenv";
dotenv.config();

const serverUrl = process.env.REACT_APP_SERVER_URL;
const emailRestAPI = `${serverUrl}/email`;

export const sendEmail = async (name, email, title, message) => {
  const body = { name, email, title, message };
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(emailRestAPI, requestOptions);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
