const { Previous } = require('../models');
 
const previousData = [
    {
        name: "Daffy Duck",
        quote: "Youuu're dethpicable!",
        origin: "Looney Tunes",
        personalities: "Greedy, Self-centered, Egotistical, Wacky"
    }
];

const seedPrevious = () => Previous.bulkCreate(previousData);

module.exports = seedPrevious;