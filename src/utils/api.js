const api = (() => {
	const BASE_URL = 'https://forum-api.dicoding.dev/v1';
	const KEY_STORAGE = 'kelakar_forum_access';

	function putAccessToken(token) {
		localStorage.setItem(KEY_STORAGE, token);
	}

	function getAccessToken() {
		return localStorage.getItem(KEY_STORAGE);
	}

	async function _fetchWithAuth(url, options = {}) {
		return await fetch(url, {
			...options,
			headers: {
				Authorization: `Bearer ${getAccessToken()}`,
				'Content-Type': 'application/json',
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
		const responseJSON = await response.json();
		const { status, message } = responseJSON;

		if (status !== 'success') {
			alert(message);
			throw new Error(message);
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
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { token },
		} = await responseJSON;

		if (status !== 'success') {
			alert(message);
			throw new Error(message);
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
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { users },
		} = responseJSON;

		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
		return { error: false, users };
	}

	async function getAuthUsers() {
		const response = await _fetchWithAuth(`${BASE_URL}/users/me`, {
			method: 'GET',
		});
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { user },
		} = responseJSON;

		if (status !== 'success') {
			throw new Error(message);
		}
		return { error: false, user };
	}

	async function postThread({ title, body, category }) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
			method: 'POST',
			body: JSON.stringify({ title, body, category }),
		});
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { thread },
		} = responseJSON;
		console.log(responseJSON);
		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
		return { thread };
	}

	async function getAllThreads() {
		const response = await fetch(`${BASE_URL}/threads`, {
			method: 'GET',
		});
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { threads },
		} = responseJSON;

		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
		return { error: false, threads };
	}

	async function getDetailThreads(id) {
		const response = await fetch(`${BASE_URL}/threads/${id}`, {
			method: 'GET',
		});
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { detailThread },
		} = responseJSON;
		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
		return { error: false, detailThread };
	}

	async function getAllLeaderboards() {
		const response = await fetch(`${BASE_URL}/leaderboards`, {
			method: 'GET',
		});
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { leaderboards },
		} = responseJSON;

		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
		return { error: false, leaderboards };
	}

	async function upVoteThread(id) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/up-vote`, {
			method: 'POST',
		});
		const responseJSON = await response.json();
		const { status, message } = responseJSON;
		console.log(responseJSON);
		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
	}

	async function downVoteThread(id) {
		const response = await _fetchWithAuth(
			`${BASE_URL}/threads/${id}/down-vote`,
			{
				method: 'POST',
			}
		);
		const responseJSON = await response.json();
		const { status, message } = responseJSON;
		console.log(responseJSON);
		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
	}

	async function postComment({ content, threadId }) {
		const response = await _fetchWithAuth(
			`${BASE_URL}/threads/${threadId}/comments`,
			{
				method: 'POST',
				body: JSON.stringify({ content }),
			}
		);
		const responseJSON = await response.json();
		const {
			status,
			message,
			data: { comment },
		} = responseJSON;

		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
		return { error: false, comment };
	}

	async function downVoteComment({ threadId, commentId }) {
		const response = await _fetchWithAuth(
			`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
			{
				method: 'POST',
			}
		);
		const responseJSON = await response.json();
		const { status, message } = responseJSON;
		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
	}

	async function upVoteComment({ threadId, commentId }) {
		const response = await _fetchWithAuth(
			`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
			{
				method: 'POST',
			}
		);
		const responseJSON = await response.json();
		console.log(responseJSON);
		const { status, message } = responseJSON;
		console.log(responseJSON);
		if (status !== 'success') {
			alert(message);
			throw new Error(message);
		}
	}

	async function getInitialData() {
		const { users } = await getAllUsers();
		const { threads } = await getAllThreads();
		const { leaderboards } = await getAllLeaderboards();
		return { users, threads, leaderboards };
	}

	return {
		putAccessToken,
		register,
		login,
		getAuthUsers,
		getInitialData,
		getAllLeaderboards,
		postThread,
		getDetailThreads,
		postComment,
		upVoteThread,
		downVoteThread,
		upVoteComment,
		downVoteComment,
	};
})();

export default api;
