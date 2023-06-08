const path = require('path');

const emailController = require('./controllers/emailController');
const sendEmail = emailController.sendEmail;


const routes = (app) => {
    app.route('/contact')
        .post(sendEmail)
};

module.exports = routes;
