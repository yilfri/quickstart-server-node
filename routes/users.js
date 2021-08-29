const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controller/users');

const router = Router();

// Get
router.get('/', usersGet);

// Post
router.post('/', usersPost);

// Put
router.put('/:id', usersPut);

// patch
router.patch('/', usersPatch);

// Delete
router.delete('/', usersDelete);

module.exports = router;
