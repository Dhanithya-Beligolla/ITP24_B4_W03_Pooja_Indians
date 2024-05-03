const exprss = require('express');
const router = exprss.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUser);
router.post('/updateuser', controller.updateUser);
router.post('/percentageUpdate', controller.percentageUpdate);
router.post('/deleteuser', controller.deleteUser);

module.exports = router;