'use strict';
module.exports = () => {
	const express = require('express');
	const handlebars = require('express-handlebars');
	const cookieParser = require('cookie-parser');
	const favicon = require('serve-favicon');
	const flash = require('express-flash');
	const path = require('path');

	const middleware = require('./lib/middleware.lib');
	const config = require('./config/server.config');

	const app = express();

	app.use(flash());

	const hbs = handlebars.create({
		partialsDir: path.join(__dirname, './templates', '/partials'),
		layoutsDir: path.join(__dirname, './templates', '/layouts'),
		defaultLayout: 'main',
	});
	app.engine('handlebars', hbs.engine);
	app.set('view engine', 'handlebars');
	app.set('trust proxy', 1);
	app.set('views', __dirname + '/templates');

	app.use(favicon(path.join(__dirname, './public/images', 'sun.png')));

	// let session: any;

	app.use(cookieParser());
	app.use(config.session);

	app.use(middleware.timeLog);

	app.use('/ds1', require('./controllers/ds1.controller'));
	app.use('/ds2', require('./controllers/ds2.controller'));
	app.use('/user', require('./controllers/user.controller'));
	app.use('/login', require('./controllers/login.controller'));
	app.use('/register', require('./controllers/register.controller'));
	app.use('/search', require('./controllers/search.controller'));

	app.get('/', async (req: any, res: any) => {
		res.render('./index', {
			title: 'Home',
			expressFlash: req.flash('error'),
			sucesso: req.flash('success'),
		});
	});

	app.use('/public', express.static(path.join(__dirname, './public')));

	app.listen(config.port, () =>
		console.log(`[SERVER] Servidor ouvindo na porta ${config.port}`)
	);
};
