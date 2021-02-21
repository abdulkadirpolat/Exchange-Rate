class GetApi {
	async get(url) {
		const data = await fetch(url);
		const response = data.json();

		return response;
	}
}
