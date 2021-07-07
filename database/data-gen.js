const fs = require('fs');
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
 
const dest1 = fs.createWriteStream('tab1-products.tsv', {flags: 'a'});
const dest2 = fs.createWriteStream('tab2-authors.tsv', {flags: 'a'});
const dest3 = fs.createWriteStream('tab3-reviews.tsv', {flags: 'a'});
const dest4 = fs.createWriteStream('tab4-features.tsv', {flags: 'a'});
const dest5 = fs.createWriteStream('tab5-media.tsv', {flags: 'a'});

// header1 = fs.writeFileSync('tab1-products.tsv', `name\n`);
// header2 = fs.writeFileSync('tab2-authors.tsv', `username\tavatar\n`);
// header3 = fs.writeFileSync('tab3-reviews.tsv', `headline\tbody\tstars\tposted\thelpful\tverified\n`);
// header4 = fs.writeFileSync('tab4-features.tsv', `feature\trating\tcount\n`);
// header5 = fs.writeFileSync('tab5-media.tsv', `type\turl\n`);

function appendTSV(writer) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(`${faker.name.firstName()}\n`);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`${faker.name.firstName()}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}
  
function appendTSV2(writer) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(`${faker.internet.userName()}\t${faker.image.avatar()}\n`);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`${faker.internet.userName()}\t${faker.image.avatar()}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

function appendTSV3(writer) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(`${faker.company.catchPhrase()}\t${faker.lorem.paragraph()}\t${faker.random.number({ max: 6, min: 1 })}\t${faker.date.past().toISOString().split('T')[0]}\t${faker.random.number({ max: 1000, min: 0 })}\t${faker.random.boolean()}\n`);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`${faker.company.catchPhrase()}\t${faker.lorem.paragraph()}\t${faker.random.number({ max: 6, min: 1 })}\t${faker.date.past().toISOString().split('T')[0]}\t${faker.random.number({ max: 1000, min: 0 })}\t${faker.random.boolean()}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}
// console.log(typeof faker.random.number({max: 6, min: 1}))
function appendTSV4(writer) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(`${faker.commerce.productAdjective()}\t${faker.random.number({ max: 6, min: 1 })}\t${faker.random.number({ max: 1000, min: 1 })}\n`);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`${faker.commerce.productAdjective()}\t${faker.random.number({ max: 6, min: 1 })}\t${faker.random.number({ max: 1000, min: 1 })}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

function appendTSV5(writer) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(`photo\t${faker.image.image()}\n`);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`photo\t${faker.image.image()}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

appendTSV(dest1);
appendTSV2(dest2);
appendTSV3(dest3);
appendTSV4(dest4);
appendTSV5(dest5);
