import jwt from 'jsonwebtoken';

export const verfidata = (req,res,next)=>{

    const token = req.headers.autherizations

    if(!token){
    
    return res.status(201).json({
        message: 'no token provad'

    });
    }else{
        try {
            const verify = jwt.verify(token,process.env.JWT_SECRET)
            req.user = verify;
            next();
        } catch (error) {
            res.status(401).json({
                message: 'invalid token'
            });
        }
    }
}