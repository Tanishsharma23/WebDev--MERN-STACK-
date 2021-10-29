const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views') )

app.use(express.static(path.join(__dirname , 'public'))); //middleware to use static files

app.use(express.urlencoded({extended : true})); //MIDDLEWARE FOR REQ.BODY 

// FAKING THE DATA BASE
const comments = [
    {
        id : 0,
        Name : 'Sabeel SIR',
        Text : 'buy this product',
    },
    {
        id : 1,
        Name : 'Tanish',
        Text : 'dont buy this product',
    },
    {
        id : 2,
        Name : 'mayank',
        Text : 'average',
    },
    {
        id : 3,
        Name : 'vivek',
        Text : 'costly',
    },
]









// HOME PAGE
app.get('/home' , (req,res) => {
    res.send("At HOME !!!")
})

// TO SEE ALL COMMENTS

app.get('/comments' , (req , res) =>{

    // let {comments} = req.

    res.render('index' , {comments});

})

// FORM TO ADD A NEW COMMENT

app.get('/comment/new' , (req , res) => {

    res.render('new');

})

// POST REQUEST FROM FORM TO ADD A NEW COMMENT ON /COMMENTS

app.post( '/comments' , (req  , res) => {
console.log(req.body);
    let {name , newcomment} = req.body;
    comments.push({Name : name ,  id : comments.length , Text : newcomment })

    res.redirect('/comments');

})


// SHOW PARTICULAR COMMENT w.r.t ID

app.get('/comments/:commentid' , (req , res) => {

    let {commentid} = req.params ;

    const foundcomment = comments.find((comment) => comment.id == commentid);

    // console.log(foundcomment);
    // console.log(req.params);

    res.render('show' , {foundcomment} );

})





app.listen('6345',(req,res)=>{

    console.log("hello from 6345");
})