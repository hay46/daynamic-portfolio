import {getAlldata,getById,addInformation,edit_portfolio,deletData} from '../controllers/portFolioController.js'
import express from 'express';
import {verfidata} from '../middlewares/authMiddlewar.js';

const router =express.Router;

//public user

router.get("/",getAlldata);

router.get("/:id",getById);

//admin user also view

