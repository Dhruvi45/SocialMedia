import axios from "axios";

export const axiosGet = (reqUrl) => {
  return new Promise((resolve, reject) => {
    axios
      .get(reqUrl)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const axiosPost = (reqUrl, reqBody) => {
  return new Promise((resolve, reject) => {
    axios
      .post(reqUrl, reqBody, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhNmYxMGE3Zi0yOWM4LTQ3NzUtOWI1NC0xZTk1YmQ1MzMxNzEiLCJ1c2VybmFtZSI6ImFkYXJzaGJhbGlrYSJ9.gS3XZDF7DYWQvY_GiK4peJzIRQUSMXYJq93W6Znv67E",
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
