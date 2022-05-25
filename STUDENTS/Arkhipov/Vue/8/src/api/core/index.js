import axios from "axios";
import prepareResponse from "./prepareResponse";
import prepareRequest from "./prepareRequest";

const instance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	crossdomain: true,
	baseURL: '/api',
});

export default async params => {
	const baseParams = prepareRequest(params);
	try {
		const data = await instance(baseParams);
		return prepareResponse(data);
	}
	catch (err) {
		throw err;
	}
};
