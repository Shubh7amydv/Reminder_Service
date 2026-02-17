const dotenv=require('dotenv');

dotenv.config();
console.log("ENV PORT =", process.env.PORT);

module.exports={
    PORT: process.env.PORT || 3000
}