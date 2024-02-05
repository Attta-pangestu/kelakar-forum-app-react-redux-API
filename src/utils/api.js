const api = (() => {
	const BASE_URL = 'https://forum-api.dicoding.dev/v1';
	const KEY_STORAGE = 'kelakar_forum_access';

	function putAccessToken(token) {
		localStorage.setItem(KEY_STORAGE, token);
	}

	function getAccessToken() {
		localStorage.getItem(KEY_STORAGE);
	}

	async function _fetchWithAuth(url, options = {}) {
		return await fetch(url, {
			...options,
			headers: {
				Authorization: `Bearer ${getAccessToken()}`,
			},
		});
	}

	async function register({ name, email, password }) {
		const response = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});
		const responseJSON = response.json();
		const { status, message } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true };
		}
		return { error: false };
	}

	async function login({ email, password }) {
		const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
		const responseJSON = response.json();
		const { status, message, data: token } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true, token: null };
		}
		return { error: false, token };
	}

	async function getAllUsers() {
		const response = await fetch(`${BASE_URL}/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const responseJSON = response.json();
		const { status, message, data: users } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true, users: null };
		}
		return { error: false, users };
	}

	async function getAuthUsers() {
		const response = await _fetchWithAuth(`${BASE_URL}/users/me`, {
			method: 'GET',
		});
		const responseJSON = response.json();
		const { status, message, data: user } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true, user: null };
		}
		return { error: false, user };
	}

	async function postThread({ title, body, category }) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
			method: 'POST',
			body: JSON.stringify({ title, body, category }),
		});
		const responseJSON = response.json();
		const { status, message } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true };
		}
		return { error: false };
	}

	async function getAllThreads() {
		const response = await fetch(`${BASE_URL}/threads`, {
			method: 'GET',
		});
		const responseJSON = response.json();
		const { status, message, data: threads } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true, threads: null };
		}
		return { error: false, threads };
	}

	async function getDetailThreads(id) {
		const response = await fetch(`${BASE_URL}/threads/id`, {
			method: 'GET',
		});
		const responseJSON = response.json();
		const { status, message, data: detailThread } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true, detailThread: null };
		}
		return { error: false, detailThread };
	}

	async function postComment({ content, id }) {
		const response = await _fetchWithAuthtch(
			`${BASE_URL}/threads/${id}/comments`,
			{
				method: 'POST',
				body: JSON.stringify({ content }),
			}
		);
		const responseJSON = response.json();
		const { status, message, data: detailThread } = responseJSON;

		if (status !== 'success') {
			alert(message);
			return { error: true, detailThread: null };
		}
		return { error: false, detailThread };
	}

	return {
		putAccessToken,
		register,
		login,
		getAllUsers,
		getAuthUsers,
		postThread,
	};
})();

export default api;
