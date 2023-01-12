const mongoose = require('mongoose');
const taskName = mongoose.model('taskName', {
    task: {
        type: String
    },
    completed: {
        type: Boolean
    },

})

module.exports = taskName