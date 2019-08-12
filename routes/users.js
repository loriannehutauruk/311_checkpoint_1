const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')


router.get('/users', usersController.getAllUsers) 
// => {
//     // perform some logic
//     res.json(users)
// })
  
router.get('/users/:id', usersController.getUserById) 
// => {
//     // perform some logic
//     res.json(user)
// })
  
router.post('/users', usersController.createUser) 
// => {
//     // perform some logic
//     res.send('success')
// })
  
router.post('/users/:id', usersController.updateUserById) 
// => {
//     // perform some logic
//     res.send('success')
// })

router.delete('/users/:id', usersController.deletUserById) 
// => {
//     // perform some logic
//     res.send('success')
// })

module.exports = router