import {getAlldata,getById,addInformation,edit_portfolio,deletData} from '../controllers/portFolioController.js'
import express from 'express';
import {verfidata} from '../middlewares/authMiddlewar.js';

const router =express.Router;

//public user

router.get("/",getAlldata);

router.get("/:id",getById);

//admin user also view
//addinformation router
router.post("/",verfidata,addInformation);
//update information router
router.put("/:id",verfidata,edit_portfolio,);

//delate user by id;

router.delet("/:id",verfidata,deletData);

export default router;