'use strict';
(() => {
	const router = require('express').Router();

	router.use('/', (req: any, res: any) => {
		res.send(`Página dos itens! Vindo de ${req.originalUrl}`);
	});

	module.exports = router;
})();
