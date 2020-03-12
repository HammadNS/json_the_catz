const request = require('request');

 const breedName = process.argv[2];
 const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

 request(url, (error, resp, body) => {
   if (error) {
     return console.log('Failed to find details about cat ', error);
   }
   const data = JSON.parse(body);
   const breed = data[0];
   if (breed) {
     console.log(breed.description);
   } else {
     console.log(`Failed to find breed ${breedName}`);
   }
 });

