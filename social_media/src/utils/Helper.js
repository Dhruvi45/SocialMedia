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

export const axiosPost = (reqUrl, reqBody, token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(reqUrl, reqBody, {
        headers: {
          authorization: token,
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
