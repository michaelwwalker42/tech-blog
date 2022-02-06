const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
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
// signup route
router.get('/signup', (req, res) => {
  res.render('signup')
})

module.exports = router;
