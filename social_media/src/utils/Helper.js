import axios from "axios"

export const axiosGet = (reqUrl) => {
    return new Promise((resolve, reject) => {
        axios.get(reqUrl)
            .then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
    })
}