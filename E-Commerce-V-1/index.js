const express = require('express'); //setting up express
const app = express(); //express app

const path = require('path'); //to use path.join to join the path

const mongoose = require('mongoose'); //use of mongoose ORM

mongoose.connect('mongodb://127.0.0.1:27017/shoppingApp') //mongoose connected with DB
.then(() => {
    console.log("DB CONNCETED")
}
)
.catch((err) => {
    console.log(err);
}
)



app.set('view engine' , 'ejs'); //view engine => ejs
app.set('views' , path.join(__dirname , 'views')); 

app.use(express.static(path.join(__dirname , 'public'))); //static files inside public folder
 





app.listen('3000' , () => {   //setting up server
    console.log(`server starting at port : 3000`);
})





