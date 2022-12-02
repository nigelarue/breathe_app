const router = require('express').Router();
const { Meditation, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
 try {
  //  const meditationSessions = await Meditation.findAll({
  //    include: [
  //      {
  //        model: User,
  //        attributes: ['name'],
  //      },
  //    ],
  //  });

  //  const Meditations = meditationSessions.map((sessions) => sessions.get({ plain: true }));

   res.render('homepage', { 
     logged_in: req.session.logged_in 
   });
 } catch (err) {
  console.log(err)
   res.status(500).json(err);
 }
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router