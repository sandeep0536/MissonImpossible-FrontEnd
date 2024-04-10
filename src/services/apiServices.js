import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const getWhiteListAddress = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData)
        let data = res;
        return data;
    } catch (error) {
        return error.response;
    }
}

export const getWhiteListAddres1 = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData)
        let data = res;
        return data;
    } catch (error) {
        return error.response
    }
}

export const merkleProofApi = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData)
        let data = res;
        return data;
    } catch (error) {
        return error.response
    }
}

export const userDetailsApi = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData)
        let data = res;
        return data;
    } catch (error) {
        return error.response;
    }
}

export const successPageApi = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData);
        let data = res;
        return data;
    } catch (error) {
        return error.response;
    }
}

export const failedPageApi = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData);
        let data = res;
        return data;
    } catch (error) {
        return error.response;
    }
}
export const whiteListChecker = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData);
        let data = res;
        return data;

    } catch (error) {
        return error.response;
    }
}

export const contractIsWhiteListed = async (apiPath, bodyData) => {
    try {
        let res = await axios.post(BASE_URL + apiPath, bodyData);
        let data = res;
        return data;
    } catch (error) {
        return error.response
    }
}