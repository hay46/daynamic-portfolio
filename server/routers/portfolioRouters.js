import {getAlldata,getById,addInformation,edit_portfolio,deletData} from '../controllers/portFolioController.js'
import express from 'express';
import {verfidata} from '../middlewares/authMiddlewar.js';

const Router =express.Router;

//public user

Router.get("/",getAlldata);

Router.get("/:id",getById);

//admin user also view
//addinformation router
Router.post("/",verfidata,addInformation);
//update information router
Router.put("/:id",verfidata,edit_portfolio,);

//delate user by id;

Router.delet("/:id",verfidata,deletData);

export default router;