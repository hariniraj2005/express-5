const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error');
const contactRoutes=require('./routes/contact');
const successRoutes=require('./routes/success');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(errorRoutes);

app.listen(5000);