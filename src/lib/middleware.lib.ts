'use strict';

const timeLog = async function (
	req: Express.Request,
	res: Express.Response,
	next: Express.NextFunction
) {
	const data: Date = new Date();
	console.log(
		data.toLocaleString(),
		req.ip,
		'-',
		req.method,
		req.url,
		res.statusCode
	);
	next();
};

module.exports = {
	timeLog,
};
