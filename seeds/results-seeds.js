const { Result } = require('../models');
 
const resultData = [
    {
        name: "Daffy Duck",
        quote: "Youuu're dethpicable!",
        origin: "Looney Tunes",
        personalities: "Greedy, Self-centered, Egotistical, Wacky"
    },
];

const seedResult = () => Result.bulkCreate(resultData);

module.exports = seedResult;