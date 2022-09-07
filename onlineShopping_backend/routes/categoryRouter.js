const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const authAdmin = require('../middlewares/authAdmin')
const auth = require('../middlewares/auth')


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(auth, authAdmin, categoryCtrl.createCategory)

module.exports = router