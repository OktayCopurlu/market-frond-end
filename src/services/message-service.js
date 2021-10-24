export const postMessage = (body) => {
  const requestOptions = {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch(`http://localhost:8080/messages`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log("Error :" + err);
    });
};

export async function getProductMessages(productID) {
  try {
    const messagesData = await fetch(
      `http://localhost:8080/messages/filter?productID=${productID}`
    );
    const messages = await messagesData.json();
    return messages;
  } catch (err) {
    return console.log("error", err);
  }
}
export async function getRecipientMessages(recipientID) {
  try {
    const messagesData = await fetch(
      `http://localhost:8080/messages/filter?recipientID=${recipientID}`
    );
    const messages = await messagesData.json();
    return messages;
  } catch (err) {
    return console.log("error", err);
  }
}

export async function getSenderMessages(senderID) {
  
  try {
    const messagesData = await fetch(
      `http://localhost:8080/messages/filter?senderID=${senderID}`
    );
    const messages = await messagesData.json();
    return messages;
  } catch (err) {
    return console.log("error", err);
  }
}

export async function getUserMessages(mongoUserID){
  try {
    const messagesData = await fetch(
      `http://localhost:8080/messages/filter?_id=${mongoUserID}`
    );
    const messages = await messagesData.json();
    return messages;
  } catch (err) {
    return console.log("error", err);
  }

}