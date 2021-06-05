const {Router}= require('express');
const router = Router();
const { home, getUsers, createuser, getUserById, deleteUser} = require( '../controllers/index.controler')
router.get('/', home)
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createuser);
router.delete('/users/:id', deleteUser);
module.exports=router;