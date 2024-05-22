const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const ownersRouter = require('./Routes/ownersRouter');
const usersRouter = require('./Routes/usersRouter');
const productsRouter = require('./Routes/productsRouter');

const db=require('./config/mongoose_connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
