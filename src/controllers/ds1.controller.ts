'use strict';
(() => {
	const router = require('express').Router();

	const defaultGame = 'Dark Souls';
	const defaultType = 'Item';

	router.use('/itens/:id', (req: any, res: any) => {
		const body =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
			'Aenean non egestas leo, non dapibus tellus. ' +
			'Maecenas placerat porttitor orci vitae rhoncus.';
		res.render('./pages/article', {
			title: req.params.id,
			articleTitle: `Item ${req.params.id}`,
			subject: req.params.id,
			game: defaultGame,
			type: defaultType,
			articleBody: body,
		});
	});

	router.use('/itens', (req: any, res: any) => {
		res.send(`Página dos itens do DS1! Vindo de ${req.originalUrl}`);
	});

	router.use('/regioes', (req: any, res: any) => {
		res.send(`Página das regiões do DS1! Vindo de ${req.originalUrl}`);
	});

	router.use('/personagens', (req: any, res: any) => {
		res.send(`Página dos personagens do DS1! Vindo de ${req.originalUrl}`);
	});

	router.use('/', (req: any, res: any) => {
		res.send(`Página do DS1! Vindo de ${req.originalUrl}`);
	});

	module.exports = router;
})();
