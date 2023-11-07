const express = require('express');
const router = express.Router();

const {createTodo} = require('../controllers/createTodo');
const {getTodo, getByIdTodo} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo } = require('../controllers/deleteTodo');

router.post('/createtodo',createTodo);
router.get('/gettodo',getTodo);
router.get('/getByIdTodo/:id',getByIdTodo);
router.put('/updatetodo/:id',updateTodo);
router.delete('/deletetodo/:id',deleteTodo);


module.exports = router;
