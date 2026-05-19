import {getAlldata,getById,addInformation,edit_portfolio,deletData} from '../controllers/portFolioController.js'
import express from 'express';
import {verfidata} from '../middlewares/authMiddlewar.js';

const router =express.Router();

//public user

router.get("/getall",getAlldata);

router.get("/getbyid/:id",getById);

//admin user also view
//addinformation router
router.post("/addportfolio",verfidata,addInformation);
//update information router
router.put("/edit_portfolio/:id",verfidata,edit_portfolio,);

//delate user by id;

router.delete("/delete_portfolio/:id", verfidata, deletData);

export default router;