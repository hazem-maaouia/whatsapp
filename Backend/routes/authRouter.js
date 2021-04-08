const  express = require('express'); 
const { register,login, getAuthUser, messagechat, getMessage, newmessage } = require('../controllers/authcontroller');
const { loginRules, validator, registerRules } = require('../middleware/bodyValidator');
const isAuth = require('../middleware/isAuth');
const upload = require('../middleware/upload');

const router= express.Router()

router.post('/register',upload.single("image"),registerRules(),validator,register);
router.post('/login',loginRules(),validator,login);
router.get('/current_user',isAuth,getAuthUser);
router.post('/new/conversation',messagechat);
router.post('/new/message',newmessage);

router.get('/messages/sync',getMessage);
module.exports=router

