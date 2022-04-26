require('dotenv').config();
const express = require('express');
const UserRoutes = require('./routes/user');
const AuthRoutes = require('./routes/auth');
const CategoriesRoutes = require('./routes/categories');
const PostRoutes = require('./routes/post');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', UserRoutes);
app.use('/login', AuthRoutes);
app.use('/categories', CategoriesRoutes);
app.use('/post', PostRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
