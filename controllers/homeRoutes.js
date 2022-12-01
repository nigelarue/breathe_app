const router = require('express').Router();
const { Meditation, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
 try {
   // Get all Meditations and JOIN with user data
   const meditationSessions = await Meditation.findAll({
     include: [
       {
         model: User,
         attributes: ['name'],
       },
     ],
   });

   // Serialize data so the template can read it
   const Meditations = meditationSessions.map((sessions) => sessions.get({ plain: true }));

   // Pass serialized data and session flag into template
   res.render('homepage', { 
     sessions, 
     logged_in: req.session.logged_in 
   });
 } catch (err) {
   res.status(500).json(err);
 }
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router