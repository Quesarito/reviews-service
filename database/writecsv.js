// var fs = require('fs');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const request = require('request');
const faker = require('faker');

let NUM_PRODUCTS = 100;
let NUM_AUTHORS = 100;
let NUM_REVIEWS = 200;
let NUM_FEATURES = 10;
let NUM_MEDIA = 50;

let getRandomInt = function(start, stop) {
  return Math.floor((Math.random() * (stop - start)) + start);
};

let getRandomDouble = function(start = 0, stop = 5) {
  return ((Math.random() * (stop - start)) + start).toFixed(1);
};

// let getGibberish = () => {
//   return new Promise((resolve, reject) => {
//     let numPara = getRandomInt(1, 4);
//     let minWords = getRandomInt(1, 20);
//     let maxWords = getRandomInt(20, 100);
//     // console.log('RRRRRR', `http://www.randomtext.me/api/gibberish/p-${numPara}/${minWords}-${maxWords}`);
//     request(`http://www.randomtext.me/api/gibberish/p-${numPara}/${minWords}-${maxWords}`, 
//     (err, response) => {
//       if (err) reject(err);
//       let res = JSON.parse(response.body);
//       resolve(res);
//     });
//   });
// };

let generateReviews = function(num = NUM_REVIEWS) {
  return Promise.all(Array.from({length: num}, r => {
    return getGibberish()
      .then(gibberish => {
        return [
          faker.company.catchPhrase(), //headline
          gibberish.text_out, //body
          getRandomInt(1, 6), //stars
          faker.date.past().toISOString().split('T')[0], //date
          getRandomInt(0, 1500), //helpful
          faker.random.boolean(), //verified
          getRandomInt(1, NUM_AUTHORS + 1), //author
          getRandomInt(1, NUM_PRODUCTS + 1) //product
        ]
      })
      .catch(err => {
        console.log('ERROR GENERATING REVIEWS', err);
      });
  }));
};

let generateFeatureRatings = function(num = NUM_FEATURES) {
  return Array.from({length: num}, r => {
    return [
      faker.commerce.productAdjective(), //feature
      getRandomDouble(), //overall rating
      getRandomInt(0, 1000), //count: how many total votes cast
      getRandomInt(1, NUM_PRODUCTS) //product
    ];
  });
};

fs.writeFileSync('tab1-products.csv', 'id,name\n');
fs.writeFileSync('tab2-authors.csv', 'id,username,avatar\n');
fs.writeFileSync('tab3-reviews.csv', 'id,headline,body,stars,posted,helpful,verified,author_id,product_id\n');
fs.writeFileSync('tab4-features.csv', 'id,feature,rating,count,product_id\n');
fs.writeFileSync('tab5-media.csv', 'id,type,file,review_id\n');

let getName = (num) => {
  for (let i = 0; i <= num; i++) {
    fs.appendFile('tab1-products.csv', `${i},${faker.name.firstName()}\n`)
    fs.appendFile('tab2-authors.csv', `${i},${faker.internet.userName()},${faker.image.avatar()}\n`)
    // fs.appendFile('tab3-reviews.csv', `${i},${generateReviews()}\n`)
    fs.appendFile('tab4-features.csv', `${i},${generateFeatureRatings()}\n`)
    fs.appendFile('tab5-media.csv', `${i},'photo',${faker.image.image()},${getRandomInt(1, 100)}\n`)
    
  }
}
getName(100)
