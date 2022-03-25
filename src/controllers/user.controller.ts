'use strict';
(() => {
	const router = require('express').Router();

	router.use('/:userId', (req: any, res: any) => {
		res.send(
			`Página do usuário ${req.params.userId}! Vindo de ${req.originalUrl}`
		);
	});

	router.use('/', (req: any, res: any) => {
		res.send(`Página NENHUMA!!! Vindo de ${req.originalUrl}`);
	});

	module.exports = router;
})();
