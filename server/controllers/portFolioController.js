import {get_all_retrive,add_portfolio,get_by_id,updatPortfolio,deletPortfolio} from '../models/portfolioModel.js'


export const addInformation = (req, res) => {
    const data = req.body;

    add_portfolio(data, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to create",
                error: err.message,   // Shows actual MySQL error
                details: err
            });
        }

        return res.status(201).json({
            message: "The data was successfully created",
            results
        });
    });
};
export const getAlldata =((req,res)=>{
    get_all_retrive((err,results)=>{
        if(err){
      return res.status(500).json({message:'database error',err});
          }else{
          return  res.status(200).json(results)
          }
    });
});
     
export const getById = ((req,res)=>{
    const {id} = req.params;
    get_by_id(id,(err,results)=>{
        if(err){
        return res.status(500).json({message:"the database erro",err});
        }
        if(results.length ===0){
          return  res.status(404).json({message: "not found"});

        }else{
           return res.status(200).json(results[0]);
        }
       
    })
});


export const edit_portfolio = ((req,res)=>{

    const {id} = req.params;
    const data = req.body;
    updatPortfolio(id,data,(err,results)=>{
     if(err){
        return res.status(500).json({message: "failed to update"});
     }else{
        return res.status(201).json({message:"the data also updated secesessfuly"})
     }
    });
});

export const deletData =((req,res)=>{
    const {id} = req.params;

    deletPortfolio(id,(err,results)=>{
        if(err){
            return res.status(500).json({message:"faild to delted project",err});
        }
        if(results.affectedRows  === 0){
            return res.status(404).json({message: "the project is not found"});
        }else{
            return res.status(200).json({message : "the delate also secessfuly"});
        }
    })
})