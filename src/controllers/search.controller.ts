'use strict';
(() => {
	const router = require('express').Router();

	router.use('/', (req: any, res: any) => {
		const searchTerm = req.query.q || 'nada';
		const searchPage = req.query.page || 1;

		const MockResult = function (index: number) {
			const random = Math.ceil(Math.random() * index);
			this.title = `Artigo ${index}`;
			this.body =
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
				'Aenean non egestas leo, non dapibus tellus. ' +
				'Maecenas placerat porttitor orci vitae rhoncus.';
			this.author = random % 2 === 0 ? 'JP' : 'Christian';
		};

		const gerarMockResults = () => {
			const mockResults = [];

			for (let i = 0; i < 20; i++) {
				mockResults.push(new MockResult(i));
			}

			return mockResults;
		};

		res.send(
			JSON.stringify({
				key: searchTerm,
				page: searchPage,
				results: gerarMockResults(),
			})
		);
	});

	module.exports = router;
})();
