//en custom.js
import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
  header: {
    Accept: "application/json",
  },
});

export default authFetch;
