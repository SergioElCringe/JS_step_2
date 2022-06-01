import axios from 'axios';
import prepareRequest from './prepareRequest.js';
import prepareResponse from './prepareResponse.js';

const instance = axios.create({
    baseURL: '/api',
    headers: { 'Content-Type': 'application/json', },
    crossdomain: true
});

export default async function(params) {
    const reqParams = prepareRequest(params);
    try {
        const data = await instance(reqParams);
        return prepareResponse(data);
    }
    catch (err) {
        throw err;
    }
};