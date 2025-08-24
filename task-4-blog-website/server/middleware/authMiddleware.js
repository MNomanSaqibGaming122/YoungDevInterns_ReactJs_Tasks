const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify if a user is authenticated
const authMiddleware = async (req, res, next) => {
  // Get token from the header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from DB to attach full details (incl. role)
    const user = await User.findById(decoded.user.id).select('-password');
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }

    req.user = user; // now has role, username, email, etc.
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Middleware to verify if the authenticated user is an admin
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ msg: 'Access denied. Admins only.' });
  }
};

module.exports = { authMiddleware, adminMiddleware };
