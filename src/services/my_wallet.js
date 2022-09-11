import axios from "axios";

const URL = "http://localhost:5000";

function postNewUser (body) {
    const promise = axios.post(`${URL}/sign-up`, body);
    return promise;
};

function postLogin (body) {
    const promise = axios.post(`${URL}/sign-in`, body);
    return promise;
};

function getTransactions (config) {
    const promise = axios.get(`${URL}/transactions`, config);
    return promise;
}

export { postNewUser, postLogin, getTransactions };