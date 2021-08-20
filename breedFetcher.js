const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

const fetchBreedDescription = function(catBreed, callback) {
  catBreed = breed;
  let catDescription = "";
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (!body.includes(breed)) {
      console.log('No breed matched your selection');
    } else {
      catDescription = data[0].description;
      callback(null, catDescription);
    }
  });
};

module.exports = { fetchBreedDescription };