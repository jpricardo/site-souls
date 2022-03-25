'use strict';
(() => {
	const router = require('express').Router();

	router.use('/', (req: any, res: any) => {
		res.send(`Página de Registro! Vindo de ${req.originalUrl}`);
	});

	module.exports = router;
})();
