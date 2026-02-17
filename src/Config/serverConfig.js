const dotenv=require('dotenv');

dotenv.config();
console.log("ENV PORT =", process.env.PORT);

module.exports={
    PORT: process.env.PORT,
    EMAIL_ID:process.env.EMAIL_ID,
    PASSWORD:process.env.PASSWORD
}