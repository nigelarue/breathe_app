// instead of the "new project" function we will need to insert the "new meditation session" log here to store.
// below requirements need to be updated to match our recorded sessions associated with a user's profile and model id to pass through the update

const router = require('express').Router();
const { Meditation } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newMeditation = await Meditation.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMeditation);
  } catch (err) {
    res.status(400).json(err);
  }
});

// need to update meditation sessions to post to user storage/profile. Will need to write code to post after sessions are completed to on eventcompletion storing to users profile history.

module.exports = router;
