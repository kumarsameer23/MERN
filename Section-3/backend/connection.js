const mongoose = require('mongoose');

const url = 'mongodb+srv://jungleevenum:sameer123@cluster.jkkryqs.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster'

//asynchronous function - returns promise object
mongoose.connect(url)
.then((result) => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(err);    
});

console.log('Another statement');
module.exports = mongoose; 