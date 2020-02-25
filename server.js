const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
var cors = require('cors');

app.use(cors());

app.get('/', function(req, res){
   res.send('ok');
});

app.get('/books', function(req, res){
    //dummy data
    var books = [
        {name:'Name of the Wind', genre:'Fantasy',id:'1',authorId:'1'},
        {name:'The Final Empire', genre:'Fantasy',id:'2',authorId:'2'},
        {name:'The Long Earth', genre:'Sci-Fi',id:'3',authorId:'3'},
        {name:'The Hero of Ages', genre:'Fantasy',id:'4',authorId:'2'},
        {name:'The Color of Magic', genre:'Fantasy',id:'5',authorId:'3'},
        {name:'The Light Fantastic', genre:'Fantasy',id:'6',authorId:'3'}
    ];
   res.send(JSON.stringify(books));
});


app.post('/city', cors(), function(req, res){
   
   console.log(res);
});

app.listen(4000, () => {
    console.log(`server is listening on port 4000`);
});





