import client from "./gitClient";

const endpoint = "/users";

const getUserDetails = (username) =>
  client.get(`/users/${username}`, {
    user: username,
  });

export default { getUserDetails };
