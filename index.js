//import
const express = require('express');
const app = express();
//const PORT = 3150;
const PORT = process.env.PORT || 3150;
app.use(express.static('public'));
const data = require('./MOCK_DATA.json');

//registrieren wir die view engine
app.set('view engine', 'ejs');

const myArr = ['Dusseldorf', 'Munchen', 'Duisburg'];

app.get('/', (req, res) => {
   res.render('index', { title: 'Home' });
});
app.get('/about', (req, res) => {
   res.render('about', { title: 'About', myArr });
});
app.get('/contact', (req, res) => {
   res.render('contact', { title: 'Contact' });
});
app.get('/users', (req, res) => {
   res.render('users', {
      title: 'Users',
      data: data,
   });
});
app.get('/users/:user', (req, res) => {
   console.log(req.params.user);
   // if (req.params.user > data.length) {

   // }
   let currentUser = data.filter((ele) => ele.id === Number(req.params.user));
   console.log(currentUser.length);
   if (currentUser.length !== 0) {
      res.render('userDetail', { title: 'Details', user: currentUser[0] });
   } else {
      res.status(404).render('404', { title: 404 });
   }
});

app.use((req, res) => {
   res.status(404).render('404', { title: 404 });
});

// eine About eine Contact Seite
//untereinander verlinken

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
