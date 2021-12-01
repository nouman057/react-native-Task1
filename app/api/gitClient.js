import { create } from "apisauce";

const gitClient = create({
  baseURL: "https://api.github.com/",
});

export default gitClient;
