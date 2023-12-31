import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  withCredentials: true,
});

export default {
  GET: instance.get,
  POST: instance.post,
  PUT: instance.put,
  PATCH: instance.patch,
};
