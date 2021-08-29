// Method GET
const usersGet = (req, res) => {
	const { mother, father, ci } = req.query;

	res.status(200).json({
		status: 'ok',
		msg: 'Method GET: Controller Ok',
		mother,
		father,
		ci
	});
};

// Method POST
const usersPost = (req, res) => {
	//const body = req.body;
	const { name, lastName } = req.body;

	res.json({
		status: 'ok',
		msg: 'Method POST: Controller Ok',
		name,
		lastName
	});
};

// Method PUT
const usersPut = (req, res) => {
	const { id } = req.params;

	res.json({
		status: 'ok',
		msg: 'Method PUT: Controller Ok',
		id
	});
};

// Method PATCH
const usersPatch = (req, res) => {
	res.json({
		status: 'ok',
		msg: 'Method PATCH: Controller Ok'
	});
};

// Method DELETE
const usersDelete = (req, res) => {
	res.json({
		status: 'ok',
		msg: 'Method DELETE: Controller Ok'
	});
};

module.exports = { usersGet, usersPost, usersPut, usersPatch, usersDelete };
