const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
const accessTokenMNG = process.env.REACT_APP_AUTH0_MNGT_TOKEN;

//get all users
export async function getAll(getAccessTokenSilently) {
  try {
    const accessToken = await getAccessTokenSilently({
      audience: audience,
    });
    const userDetailsByIdUrl = `https://${domain}/api/v2/users`;
    const metadataResponse = await fetch(userDetailsByIdUrl, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        read: "users",
      },
      params: { search_engine: "v3" },
    });
    const data = await metadataResponse.json();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}

//get users information from auth0
export const getUsers = async () => {
  try {
    const userDetailsByIdUrl = `https://${domain}/api/v2/users`;
    const response = await fetch(userDetailsByIdUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessTokenMNG}`,
      },
    });
    const users = await response.json();
    return await users;
  } catch (e) {
    console.log(e.message);
  }
};

//get users information from auth0
export const getUserById = async (props) => {
  const userId = props;
  try {
    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${userId}`;
    const response = await fetch(userDetailsByIdUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessTokenMNG}`,
      },
    });
    const user = await response.json();
    return await user;
  } catch (e) {
    console.log(e.message);
  }
};

// update user meta data
export const updateUserMetaData = async (
  userId,
  accessToken,
  context,
  picture
) => {
  const token = await accessToken;

  const name = context.name;
  const address = context.address;
  const canton = context.canton;
  const city = context.city;
  const detail = context.detail;
  const contactNumber = context.phone;
  const birthDate = context.birthDate;
  const job = context.job;

  const body = {
    user_metadata: {
      canton,
      city,
      address,
      birthDate,
      contactNumber,
      detail,
      name,
      job,
      picture,
    },
  };

  try {
    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${userId}`;
    const metadataResponse = await fetch(userDetailsByIdUrl, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const { user_metadata } = await metadataResponse.json();
    return await user_metadata;
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteUser = async (userId,accessToken) => {
  try {
    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${userId}`;
    await fetch(userDetailsByIdUrl, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (e) {
    console.log(e.message);
  }
};

//get user information from auth0
export const getUserMetadata = async (userId,getAccessTokenSilently,context) => {
  try {
    const accessToken = await getAccessTokenSilently({
      audience: audience,
      scope: "read:current_user_metadata",
    });

    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${userId}`;
    const metadataResponse = await fetch(userDetailsByIdUrl, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { user_metadata } = await metadataResponse.json();
    await context.userMetaDataHandler(user_metadata)
    return await user_metadata;
  } catch (e) {
    console.log(e.message);
  }
};