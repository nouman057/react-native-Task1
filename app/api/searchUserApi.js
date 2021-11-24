import client from "./searchApiClient";

const endpoint = "/users?q=h&page=";

const searchUser = (username, page) =>
  client.get(
    "/users?q={username}&page={page}&per_page=10",
    {
      q: username,
      page: page,
      per_page: 10,
    },
    {
      headers: {
        Authorization: "token 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",
      },
    }
  );

export default { searchUser };
