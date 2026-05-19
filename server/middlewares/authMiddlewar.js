import jwt from 'jsonwebtoken';

export const verfidata = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // If Authorization header is missing, stop here
    if (!authHeader) {
        console.log('auth header is not found');
        return res.status(401).json({
            message: 'No Authorization header provided'
        });
    }

    // Check header format
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Invalid Authorization format'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verify;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token',
            error: error.message
        });
    }
};