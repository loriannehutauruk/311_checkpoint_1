const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = require('./routes/users')
const port = process.env.PORT || 4000



app.get('/', (req, res) => res.send('default route'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(users);
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));


app.listen(port, () => {
  console.log('app is listening on:', port)
})

