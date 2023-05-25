require('./utils/startServerScript')

const express = require('express')
const http = require('http')
const io = require('./socket/socket')

const errorHandlers = require('./controllers/errorController/errorController')
// const userJobPostController = require('./controllers/userJobPostController')
const stringSearchController = require('./controllers/stringSearchController')

const authRouter = require('./routes/authRoutes')
const usersRouter = require('./routes/usersRoutes')
// const jobPostRouter = require('./routes/jobPostRoutes')
const friendRouter = require('./routes/friendRoutes')
const notificationRouter = require('./routes/notificationRoutes')
const chatRouter = require('./routes/chatRoutes')
const statusPostRouter = require('./routes/statusPostRoutes')

const app = express()
const server = http.createServer(app)

// set up socketio
io.initialize(server)
require('./socket/chat')

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('', authRouter)
app.post('/email-search', stringSearchController.searchByEmail)
app.post('/name-search', stringSearchController.searchByName)
app.use('/chatroom', chatRouter)
// app.get('/jobpost/:jobPostId', userJobPostController.getAJobPostUsingItsId)
// app.use('/:userId/jobpost', jobPostRouter)
app.use('/:userId/post', statusPostRouter)
app.use('/:userId/friend-request', friendRouter)
app.use('/:userId/notification', notificationRouter)
app.use('', usersRouter)
app.use('*', errorHandlers.invalidUrlHandler)
app.use(errorHandlers.globalErrorHandler)

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`)
})
