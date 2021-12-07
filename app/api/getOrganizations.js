import client from "./gitClient";

const endpoint = "/organizations";

const getOrganizations = () => client.get(endpoint, {});

export default { getOrganizations };
