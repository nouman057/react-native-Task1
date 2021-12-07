import client from "./gitClient";

const endpoint = "/users";

const getUsers = () =>
  client.get(endpoint, {
    since: 0,
    per_page: 30,
  });

export default { getUsers };
