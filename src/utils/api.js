export const BASE_URL = 'https://kinomovie.nomorepartiesxyz.ru';

export const fetchApi = async ({
	path = '', method = 'GET', body = null
}) => {
	const token = localStorage.getItem('token');
	const res = await fetch(`${BASE_URL}/${path}`, {
		method,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			...(token ? { 'Authorization': 'Bearer ' + token } : {})
		},
		body: body && JSON.stringify(body),
		//  credentials,
	});

	if (!res.ok) {
		const error = await res.json();
		return Promise.reject(new Error(`${error.message}`));
	}

	return res.json();
};
