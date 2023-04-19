const jwt = require('jsonwebtoken')

const JobPost = require('../models/JobPost')
const AppError = require('../utils/AppError')
const asyncCatch = require('../utils/asyncCatch')
const User = require('../models/User')

exports.createNewJobPost = asyncCatch(async (req, res, next) => {
    const userId = req.params.user_id
    req.body.author = userId

    const newJobPost = await JobPost.createNewJobPost(req)

    if (!newJobPost)
        return next(new AppError('Unable to create a new job post', 500))

    const user = await User.findById(userId)
    if (!user)
        return next(
            new AppError('Invalid user or missing user posting this job', 400)
        )

    user.jobPosts.push(newJobPost.id)
    await user.save()

    res.status(200).json(newJobPost)
})

exports.getAllJobPostsOfAUser = asyncCatch(async (req, res, next) => {
    const { user_id: userId } = req.params
    const user = await User.findById(userId)
    if (!user) return next(new AppError('Unable to find this user', 400))
    const jobPosts = await JobPost.find({ author: userId })

    res.status(200).json(jobPosts)
})

exports.getAJobPostUsingItsId = asyncCatch(async (req, res, next) => {
    const { jobPostId } = req.params
    const jobPost = await JobPost.findById(jobPostId)
    if (!jobPost) return next(new AppError('Unable to find the job post', 400))

    res.status(200).json(jobPost)
})

exports.updateJobPostById = asyncCatch(async (req, res, next) => {
    const { body: jobPostBody } = req
    const { job_post_id: jobPostId } = req.params

    const updatedPost = await JobPost.findByIdAndUpdate(
        jobPostId,
        jobPostBody,
        {
            new: true,
            runValidators: true,
        }
    )

    if (!updatedPost)
        return next(new AppError('Unable to update job post', 500))

    res.status(200).json(updatedPost)
})

exports.deleteJobPostById = asyncCatch(async (req, res, next) => {
    const { job_post_id: jobPostId } = req.params

    const deletedPost = await JobPost.findByIdAndDelete(jobPostId)
    if (!deletedPost)
        return next(new AppError('Invalid job post id or already removed', 400))

    res.status(204).end()
})
