const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// homepage route
router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn })
})
// login route
router.get('/login', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
