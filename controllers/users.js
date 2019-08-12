const users = require('../data/index');
// const sampleUser = require('../data/sampleUser')


const getAllUsers = ('/users', (req, res) => {
 
    res.json(users)
})

const getUserById = ('/users/id', (req,res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found){
      res.send(users.filter(user => user.id == req.params.id) )
    } else {
      res.status(400).json({msg: `User id ${req.params.id}not found.`})
    }
    res.json(users)
})

const createUser = ('/users', (req, res) => {
   const newUser = { 
    id: req.body.id,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.street,
      suite: req.body.suite,
      city: req.body.city,
      zipcode: req.body.zipcode,
      geo: {
        lat: req.body.lat,
        lng: req.body.lng
      }
    },
    phone: req.body.phone,
    website: req.body.website,
    company: {
      name: req.body.name,
      catchPhrase: req.body.catchPhrase,
      bs: req.body.bs
    }
}
    //pushing the new user into the array
    users.push(newUser)
    res.json(users)
})

const updateUserById = ('/users/:id', (req, res) => {
   
    const updateUser = {
    id: req.body.id,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.street,
      suite: req.body.suite,
      city: req.body.city,
      zipcode: req.body.zipcode,
      geo: {
        lat: req.body.lat,
        lng: req.body.lng
      }
    },
    phone: req.body.phone,
    website: req.body.website,
    company: {
      name: req.body.name,
      catchPhrase: req.body.catchPhrase,
      bs: req.b
    }
}
    //first add updated field to users then push the entire update user object to the array 
    users.push(updateUser)
    res.json(updateUser)
})

const deletUserById = ('/users/:id', (req, res) => {
    const found = users.some(user => user._id == req.params.id)
  if (found){
    res.json({ 
      msg: `User deleted`, 
      users: users.filter(user => user._id == req.params.id)
    })
  } else {
    res.status(404).json({msg: `User id ${req.params.id} not found.`})
  }
})
  // exports each of the functions/methods we build as an object
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deletUserById
  }