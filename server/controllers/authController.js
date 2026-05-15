import bcrpt from 'bcrupt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js'
import { userFindbyEmail } from '../models/userModel.js';

export const loginUser = (req, res) => {
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
        res.json({ token });
    });
};

