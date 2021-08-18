const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

const breedInfo = function(catBreed) {
  catBreed = breed[0] + breed[1] + breed[2] + breed[3];
  let catDescription = "";
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${catBreed}`, (error, response, body) => {
    console.log('error: ', error);
    'statusCode: ', response && response.statusCode;
    'body: ', body;

    const data = JSON.parse(body);
    catDescription = data[0].breeds[0].description;
    console.log(catDescription);
  });
};

breedInfo(breed);