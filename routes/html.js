// REQUIREMENTS
const path = require('path')
const router = require("express").Router();

// GET ROUTES
router.get('/exercise', ({ body }, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
})

router.get('/stats', ({ body }, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})

// EXPORTS
module.exports = router;