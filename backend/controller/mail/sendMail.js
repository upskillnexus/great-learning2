const nodemailer = require('nodemailer');
const { smtpModal } = require('../../modals/smtp/smtp.modal');

const sendMailFunction = async ({ html, emailFrom, subject }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const smtp = await smtpModal.findOne({orgNumber: "0001"});

            const smtpConfig = {
                host: smtp.server,
                port: smtp.port,
                secure: false,
                auth: {
                    user: smtp.userName,
                    pass: smtp.password,
                },
            };

            const transporter = nodemailer.createTransport(smtpConfig);

            const mailOptions = {
                from: emailFrom,
                to: smtp?.to,
                subject: subject,
                html: html,
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject({ message: error.message, status: false });
                } else {
                    resolve({ message: 'mail sent.', data: info.response, status: true });
                }
            });
        } catch (error) {
            reject({ message: error.message, status: false });
        }
    });
};

module.exports = { sendMailFunction };
