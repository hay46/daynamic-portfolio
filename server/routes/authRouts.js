import express from 'express';
import {loginAdmin,createAdmin} from '../controllers/authController.js';

const router = express.Router();

//create route

router.post('./create-admin',createAdmin);

router.post('./login',loginAdmin);

export default router;
