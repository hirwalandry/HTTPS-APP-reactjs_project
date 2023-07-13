import axios from "axios";
import logger from "./logServices";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    logger.log();
    toast.error("failure occur please click ok");
  }
  return Promise.reject(error);
});

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};
