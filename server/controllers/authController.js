import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js'
import { userFindbyEmail,userInsertData} from '../models/userModel.js';

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    userFindbyEmail(email, async (err, results) => {
        if (err) 
         return res.status(500).json({ message: 'Database error' });

        if(results.length === 0) return res.status(401).json({mmessage:'invalid creadentials'});
 const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
           return res.status(401).json({ message: 'Invalid credentials' });
        } 
        const token = jwt.sign(
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
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required'
        });
    }

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert into database
        userInsertData(
            {
                name,
                email,
                password: hashedPassword
            },
            (err, results) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        return res.status(409).json({
                            message: 'Email already exists'
                        });
                    }

                    return res.status(500).json({
                        message: 'Database error'
                    });
                }

                return res.status(201).json({
                    message: 'User created successfully'
                });
            }
        );
    } catch (error) {
        return res.status(500).json({
            message: 'Server error'
        });
    }
};