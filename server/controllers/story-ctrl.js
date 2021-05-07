
const Story = require('../models/story-model');

createStory = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a story',
        })
    }

    const story = new Story(body)

    if (!story) {
        return res.status(400).json({ success: false, error: err })
    }

    story
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: story._id,
                message: 'Story created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Story not created!',
            })
        })
}

updateStory = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Story.findOne({ _id: req.params.id }, (err, story) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Story not found!',
            })
        }
        story.title = body.title
        story.author = body.author
        story.rating = body.rating
        story
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: story._id,
                    message: 'Story updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Story not updated!',
                })
            })
    })
}

deleteStory = async (req, res) => {
    await Story.findOneAndDelete({ _id: req.params.id }, (err, story) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!story) {
            return res
                .status(404)
                .json({ success: false, error: `Story not found` })
        }

        return res.status(200).json({ success: true, data: story })
    }).catch(err => console.log(err))
}

getStoryById = async (req, res) => {
    await Story.findOne({ _id: req.params.id }, (err, story) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!story) {
            return res
                .status(404)
                .json({ success: false, error: `Story not found` })
        }
        return res.status(200).json({ success: true, data: story })
    }).catch(err => console.log(err))
}

getStories = async (req, res) => {
    await Story.find({}, (err, stories) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!stories.length) {
            return res
                .status(404)
                .json({ success: false, error: `Story not found` })
        }
        return res.status(200).json({ success: true, data: stories })
    }).catch(err => console.log(err))
}

module.exports = {
    createStory,
    updateStory,
    deleteStory,
    getStories,
    getStoryById,
}