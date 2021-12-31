import client from "./client";

const nameSpace = "todos";

const get = () => client.get(nameSpace);
const post = data => client.post(nameSpace, data);
const put = data => client.put(nameSpace, data);

export default { get, post, put };
