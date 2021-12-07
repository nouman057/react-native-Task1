import client from "./gitClient";

const endpoint = "/licenses";

const getLicenses = () => client.get(endpoint, {});

export default { getLicenses };
