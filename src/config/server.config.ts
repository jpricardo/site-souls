'use strict';
require('dotenv').config();

const port = process.env.PORT || 3000;
const sessionKey = process.env.SESSION_KEY || 'key_padrão';

module.exports = {
	port,
	sessionKey,
};
