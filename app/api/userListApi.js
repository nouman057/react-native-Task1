import client from "./gitClient";

const endpoint = "/users";

const getUsers = (page) =>
  client.get(endpoint, {
    since: 0,
    per_page: 10,
  });

export default { getUsers };
