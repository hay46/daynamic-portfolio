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
     
export const getById = ((req,res)=>{
    const {id} = req.params;
    get_by_id(id,(err,results)=>{
        if(err){
         res.status(500).json({message:"the database erro",err});
        }
        if(results.length ===0){
            res.status(404).json({message: "not found"});

        }else{
            res.status(200).json(results[0]);
        }
       
    })
})