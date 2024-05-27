import axios from 'axios';
const baseUrl = '/api/notes';

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(baseUrl);
  console.log(request);
  return request.data;
};

const create = (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  try {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then((response) => response.data);
  } catch (error) {
    return error;
  }
};

export default { getAll, create, update, setToken };
