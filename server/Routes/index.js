const router = require('express').Router();
const adminRouter = require('./adminRouter');

router.use('/admin', adminRouter);

module.exports = router;
