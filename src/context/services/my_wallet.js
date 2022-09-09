import axios from "axios";

const URL = "http://localhost:5000";

function postNewUser (body) {
    const promise = axios.post(`${URL}/sign-in`, body);
    return promise;
};

export { postNewUser };