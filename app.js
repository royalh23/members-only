const express = require('express');
const session = require('express-session');
const passport = require('passport');
const pool = require('./configs/db/pool');
const pgSession = require('connect-pg-simple')(session);

const adminRouter = require('./routes/adminRouter');
const memberRouter = require('./routes/memberRouter');
const messagesRouter = require('./routes/messagesRouter');
const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');
const signupRouter = require('./routes/signupRouter');
const indexRouter = require('./routes/indexRouter');

const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new pgSession({
      pool,
      tableName: 'session',
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Set expiration date to 1 day
    },
  }),
);
require('./configs/passport/passport');
app.use(passport.session());

app.use('/admin', adminRouter);
app.use('/member', memberRouter);
app.use('/messages', messagesRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/signup', signupRouter);
app.use('/', indexRouter);
app.get('*', (req, res) => res.status(404).send('<h1>Page not found</h1>'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
