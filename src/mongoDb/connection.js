const mongoose = require('mongoose');
const uri = `mongodb+srv://ibrahim:Pt5DAwp1RmWOx58a@artasks.7ueff.mongodb.net/blogDb`

async function main() {
    return mongoose.connect(uri);
}

module.exports = main