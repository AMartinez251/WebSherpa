const ses = require('../aws/ses');
const formidable = require('formidable');

const sesSend = ses.sesSend;
const sendEmail = (req, res) => {
    console.log("Hit the sendEmail Endpoint");

    var form = new formidable.IncomingForm();
    form.parse(req, async (err, data, files) => {
        if (err) {
            console.log("Error parsing form: ", err);
            res.sendStatus(404);
            return;
        }
        var name = data.name;
        console.log("Name is ", name);

        var email = data.email;
        console.log("Email is ", email);

        var com = data.com;
        console.log("Com is ", com);

        var radio = data.radio;
        console.log("Com is ", radio);
        sesSend(name, email, com, radio);
        res.sendStatus(200);
    });

}

const simpleResponse = (req, res) => {
    console.log("test");
    res.send({"status" : "okay"});
}

module.exports = {
    sendEmail : sendEmail,
    simpleResponse : simpleResponse
}