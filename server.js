const express = require('express');
const app = express();
const cors = require('cors');
// const path = require("path");

app.use(cors());
app.use(express.json());
app.use('/pruebaAngular',require('./src/app/routes/routes'));
app.set('port', process.env.PORT || 3000);

// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname + '/src/app/login/login.component.html'));
//     res.sendFile(path.join(__dirname + '/src/app/app.component.html'));
// });



// app.post('/login', (req, res) => {
//   const { user, pass } = req.body;
//   const data = users.find(u => u.user === user && u.pass === pass);
//   if (data) {
//     const accessToken = jwt.sign({ user: data.user }, 'your_jwt_secret');
//     res.json({ accessToken });
//     console.log("Sesion Ok");
//   } else {
//     res.status(401).send('user or pass incorrect');
//   }
// });

app.listen(app.get('port'), () => {
    console.log('Url http://localhost:', app.get('port'));
});