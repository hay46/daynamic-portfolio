import bcrpt from 'bcrupt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js'
import { userFindbyEmail } from '../models/userModel.js';

export const loginUser = (req, res) => {
    const { email, password } = req.body;

    userFindbyEmail(email, (err, results) => {
        if (err) {