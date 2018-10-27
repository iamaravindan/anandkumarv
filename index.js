const exp = require('express');
const app = exp();

app.get('/',function(req,res){
    res.send('Hi There!');
});

app.listen(3000,process.env.IP);
