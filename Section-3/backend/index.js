const express = require('express');
const UserRouter = require('./routers/userRouter');
const UserDetailRouter = require('./routers/userDetailRouter');
require('./connection');


const app = express();

const port = 5000;

//middlewares
app.use(express.json()); // to parse JSON bodies
app.use('/user', UserRouter);
app.use('/userDetail', UserDetailRouter);

//routes

app.get('/', (req, res) => {
    res.send('Response from Express');
});

//Add
app.get('/add', (req, res) => {
    res.send('Response from Add');
});

//update
app.get('/update', (req, res) => {
    res.send('Response from Update');
});

//delete
app.get('/delete', (req, res) => {
    res.send('Response fron delete');
});

//start the server
app.listen(port, () => {
    console.log('Express server has started');
});
    