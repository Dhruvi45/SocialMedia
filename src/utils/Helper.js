import axios from "axios";

const accessToken = localStorage.getItem("token");

export const axiosGet = (reqUrl, token=accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(reqUrl,
        {
          headers: {
            authorization: token,
          }
        })
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

export const axiosDelete = (reqUrl, token) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(reqUrl, {
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
