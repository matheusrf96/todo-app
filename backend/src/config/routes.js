const express = require('express')

module.exports = (server) => {
    const router = express.Router()

    // API routes
    server.use('/api', router)

    // Todo routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, 'todos')
}