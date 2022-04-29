const express = require("express");
const path = require("path");
let bodyParser = require('body-parser');
let userCount = 1;
let currentUser = 0;

const app = express();

let userInfo = [
    {
        id: 1,
        name: 'Devin Dickerson',
        email: 'dickerson2522@gmail.com',
        password: 'DickeR_D22',
    },
];

let userBP = [
    {
        userId: 1,
        info: 1,
        date: '4/25/2022',
        sys: 180,
        dia: 200,
    },
    {
        userId:1,
        date: '4/26/2022',
        info: 2,
        sys: 175,
        dia: 220,
    }
];

app.use("/static", express.static(path.resolve(__dirname, "Frontend", "static")));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/Frontend/index.html"));
app.use(express.static(__dirname + "/Frontend/Login.html"));

//GET Login url
app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,"Frontend", "Login.html"));
});

//GET home url
app.get('/*', function(req, res) {
   res.sendFile(path.resolve(__dirname, 'Frontend','index.html'));
});

//POST: User login authentication
app.post('/login', function(req,res) {
    let email = req.body.Lemail;
    let pass = req.body.Lpass;
    let found = false;


    userInfo.forEach(function (user, index) {
        if(!found && email === user.email && pass === user.password ){
            currentUser = user.id;
            found = true;
            res.send('success');
        }
        else{
            res.send('Wrong email or password');
        }
    });
    res.sendStatus(currentUser);
});


//POST: Create account
app.post('/createAcc', function(req,res) {
    let Fname = req.body.Fname;
    let Lname = req.body.Lname;
    let email = req.body.CEmail;
    let pass = req.body.CPass;
    let rePass = req.body.CRePass;
    let notFound = false;

    userInfo.forEach(function (user, index) {
        if(!notFound && email !== user.email && rePass === pass){
            ++userCount;
            currentUser = userCount;
            userInfo.id = userCount;
            userInfo.name = Fname + ' ' + Lname;
            userInfo.email = email;
            userInfo.password = pass;
            notFound = true;
            res.send('success');
        }
        else{
            res.send('Wrong email or password');
        }
    });
});

console.log(currentUser);
app.put('/results', function(req,res){
    let sysPress = req.body.sysPress;
    let diaPress = req.body.diaPress;
    let bloodId;
    res.send('Info passed here');

    userBP.forEach(function(user, index){
        if(currentUser === user.userId)
        {
            bloodId = Number(user.info);
        }
    });

    let newBP = new Object({
            userId: currentUser,
            info: ++bloodId,
            sys: sysPress,
            dia: diaPress
        });
});

app.put('/record',function(req,res){
    res.send({userBP: userBP});
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));