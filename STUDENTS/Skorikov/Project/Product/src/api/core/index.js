import axios from "axios";
import prepareRequest from "./prepareRequest";
import prepareResponse from "./prepareResponse";

const instance = axios.create({
    baseURL: '/api',
    headers: { 'Type-Content': 'application/json' },
    crossdomain: true,
});

export default async params => {
    const request = prepareRequest(params);
    try {
        const response = await instance(request);
        return prepareResponse(response);
    } catch (err) {
        throw err;
    };
};