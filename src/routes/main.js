// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storageDisk = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __dirname + '/../../public/images/avatars');
	},
	filename: (req, file, cb) => {
		let imageFinalName = `user_avatar_${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageFinalName);
	}
});

const upload = multer({ storage: storageDisk });

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/register', mainController.registerForm);
router.post('/register', upload.single('avatar'), mainController.store);
router.get('/login', mainController.loginForm);
router.post('/login', mainController.processLogin);
router.get('/profile/:id', mainController.profile);

module.exports = router;
