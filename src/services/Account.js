// API Endpoint
const COHORT_NAME = "2302-ACC-PT-WEB-PT-A";

// Use the APIURL variable for fetch requests
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const REGISTER_URL = `${BASE_URL}/users/register`;

// Register User
export const registerUser = async (username, password) => {
  console.log(username, password);
  try {
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
