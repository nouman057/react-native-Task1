import { create } from "apisauce";

const searchApiClient = create({
  baseURL: "https://api.github.com/search",
  headers: { Authorization: "token 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" },
});

export default searchApiClient;
