import authFetch from "./custom";

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("Request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("Successful response");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authFetch;
