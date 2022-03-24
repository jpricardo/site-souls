'use strict';
module.exports = () => {
	const express = require('express');
	const path = require('path');
	const config = require('./config/server.config');

	const app = express();

	app.get('/', async (req: Express.Request, res: Express.Response) => {
		res.send('Boa noite, cheirosa!');
	});

	app.use('/public', express.static(path.join(__dirname, './public')));

	app.listen(config.port, () =>
		console.log(`[SERVER] Servidor ouvindo na porta ${config.port}`)
	);
};
