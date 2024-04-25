var express = require('express');
var app = express();
app.get('/', function(req, res){
res.send("Hello world!");
});
const members = [
    {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
    },
    {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@gmail.com',
    status: 'inactive'
    },
    {
    id: 3,
    name: 'Shannon Jackson',
    email: 'shannon@gmail.com',
    status: 'active'
    }
    ];
    // http://localhost:5500/api/members
    app.get('/api/members', (req,res) =>{
    res.json(members)
    })
    // **************************
    // app.get('/api/members/:id', (req, res) => {
    //     res.send(req.params.id) 
    //     //http://localhost:5000/api/members/5 => it gives us 5
    //     })
    // **************************
    // app.get('/api/members/:id', (req, res) => {
    //     res.json(members.filter(member => member.id === parseInt(req.params.id)))
    //     })
    // **************************
    // app.get('/api/members/:id', (req, res) => {
    //     const found = members.some((member) => member.id === parseInt(req.params.id))
    //     if (found) {
    //         res.json(members.filter(member => member.id === parseInt(req.params.id)))
    //         } else{
    //         res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    //         }
    //     })
app.listen(5500);