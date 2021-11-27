import client from "./searchApiClient";

const endpoint = "/users?q=h&page=";

const searchUser = (username, page) =>
  client.get(
    "/users?q={username}&page={page}&per_page=20",
    {
      q: username,
      page: page,
      per_page: 20,
    }
    // {
    //   headers: {
    //     Authorization: "Token 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",
    //   },
    // }
  );

export default { searchUser };
