import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js'
import { userFindbyEmail } from '../models/userModel.js';

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    userFindbyEmail(email, async (err, results) => {
        if (err) {
         return res.status(500).json({ message: 'Database error' });
        }
        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
           return res.status(401).json({ message: 'Invalid credentials' });
        } 
        const tolken = jwt.sign(
            {
            id: user.id,
            email: user.email
            },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
        );
        return res.status(200).json({ 
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
export const createAdmin = async (req, res) => {
 const {name,email, password} = req.body;

 // hashed password

 const hashedPassword = await bcrypt.hash(password,10);
 const sql = `INSRE INTO users (name,email,password) VALUES (?, ?, ?)`

 db.query(sql,[name,email,hashedPassword],(err,resault)=>{

    if(err){
      return  res.status(400).json({
            message: 'users already exists'
        });
    }else{
       return res.status(200).json({
            message: 'users created secssessfuly'
        })  ;  
    }
 })

 };
