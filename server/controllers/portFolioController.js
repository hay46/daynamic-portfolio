import {get_all_retrive,add_portfolio,get_by_id,updatPortfolio,deletPortfolio} from '../models/portfolioModel.js'


export const getAlldata =((req,res)=>{
    get_all_retrive =((err,results)=>{
        if(err){
       res.status(500).json({message:'database error',err});
          }else{
            res.status(200).json(results)
          }
    });
});
     