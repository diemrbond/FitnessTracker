// REQUIREMENTS
const router = require('express').Router();

// ROUTES CONST
const apiRoutes = require('./api')
const htmlRoutes = require('./html')

// ROUTES
router.use('/api', apiRoutes);
router.use(htmlRoutes);

// EXPORTS
module.exports = router;