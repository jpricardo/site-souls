'use strict';
(() => {
	const router = require('express').Router();

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
