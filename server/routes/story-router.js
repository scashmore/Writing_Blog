const express = require('express');

const StoryCtrl = require('../controllers/story-ctrl');

const router = express.Router();

router.post('/story', StoryCtrl.createStory);
router.put('/story/:id', StoryCtrl.updateStory);
router.delete('/story/:id', StoryCtrl.deleteStory);
router.get('/story/:id', StoryCtrl.getStoryById);
router.get('/stories', StoryCtrl.getStories);

module.exports = router