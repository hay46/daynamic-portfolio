import bcrpt from 'bcrupt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js'
import { userFindbyEmail } from '../models/userModel.js';

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    userFindbyEmail(email, async (err, results) => {
        if (err) {
          res.status(500).json({ message: 'Database error' });
        }
        const user = results[0];
        const isPasswordValid = await bcrpt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
        } 
        const tolken = jwt.sign(
            {
            id: user.id,
            email: user.email
            },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
        );
        res.status(200).json({ 
            message: 'Login seccessful',
        
            token,
            user: {
                id: user.id,
                email:user.email,
                name: user.name
            }
         });
    });
};
export const registerUser = async (req, res) => {
 const [name,email, password] = req.body;

 // hashed password

 const hashedPassword = await bycrpt.hash(password,10);
 const sql = `INSRE INTO USERS (name,email,password) VALUES (?,?,?)`

 db.query(sql,{name,email,hashedPassword},(err,resault)=>{

    if(err){
        res.status(400).json({
            message: 'users already exists'
        });
    }else{
        res.status(200).json({
            message: 'users created secssessfuly'
        })  ;  
    }
 })

 };
