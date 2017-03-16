'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zinobeenmail@gmail.com',
        pass: 'zinobeen1!'
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.partnerMail = function (brand, email, number) {
    //sendMail("brand", "title test","testest");
    //function sendMail(brand, email, number){
    var mailOptions = {
        from: 'zinobeenmail@gmail.com', // sender address
        to: 'salezinobeen@gmail.com', // list of receivers
        subject: '제휴문의 : ' + brand, // Subject line
        html: '<h1>' + '상호명 : ' + brand + '</h1>' + '<h1>' + '이메일 : ' + email + '</h1>' + '<h1>' + '연락처 : ' + number + '</h1>' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
};

exports.opinionMail = function (title, content) {
    //sendMail("brand", "title test","testest");
    //function sendMail(brand, email, number){
    var mailOptions = {
        from: 'zinobeenmail@gmail.com', // sender address
        to: 'salezinobeen@gmail.com', // list of receivers
        subject: '고객문의 : ' + title, // Subject line
        html: '<h1>' + '고객문의 : ' + title + '</h1><br>' + '<h1>' + '내용 : ' + content + '</h1>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
};