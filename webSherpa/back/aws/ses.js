const AWS = require('aws-sdk');

AWS.config.update({region : 'us-west-2'});

aws_access_key_id       = 'AKIA3CAEVFNWEYTX5RVE'
aws_secret_access_key   = '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'


//const sesSend = (name, email, com, radio) => {
const sesSend = () => {

    var name = "Tester";
    var email = "ndriker@gmail.com";
    var com = "Hi, I am testing";
    var radio = "Personal Site";
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();

    var dateStr = today.toLocaleDateString("en-US", options);

    let params = {
        Destination: {
            ToAddresses: ['info@websherpa.xyz']
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `Message from ${email}: <br></br> ${com}`
                },
                Text: {
                    Charset: "UTF-8",
                    Data: `Message from ${email}: \n ${com}`
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `[NEW CONTACT - ${dateStr}] ${name} is looking for ${radio} services`
            },
        },
        Source: 'support@websherpa.xyz'
    }
    
    var sendPromise = new AWS.SES({
        accessKeyId: aws_access_key_id,
        secretAccessKey: aws_secret_access_key,
        apiVersion: '2010-12-01'
    }).sendEmail(params)
    .promise();
    
    sendPromise.then(
        function(data) {
            console.log(data.MessageId);
        }
    ).catch(
        function(err) {
            console.log(err, err.stack);
        }
    )
}

module.exports = {
    sesSend : sesSend
}