###Commands


npm init
npm install express --save
node server.js
npm install body-parser --save
npm install nodemon --save-dev
npm start server.js
npm install mysql --save
npm install paypal-rest-sdk
npm install express-session --save


CREATE TABLE `lottery_information` (
  `ID` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `amount` decimal(20,0) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;


https://developer.paypal.com/
- Create a new sandbox account
- Create a new REST API

https://www.sandbox.paypal.com/
- Login with the sandbox account created

https://github.com/paypal/PayPal-node-SDK
