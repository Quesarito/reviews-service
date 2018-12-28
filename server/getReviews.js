const db = require('../database');

const getReviewData = (req, res, next) => {
  db.retrieve(req.params.productId, req.query.reviewType, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    let mediaURLs = {};
    let filtered = results.filter(row => {
      if (!mediaURLs.hasOwnProperty(row.id)) {
        //Put URL into property array 
        //So any future URLs for the same review can be stored there too
        row.media = (row.media !== null) ? [row.media] : [];
        mediaURLs[row.id] = row.media; //Set reference to the first's media property array
        return true; //Keep the current review row
      }
      if (row.media !== null) {
        mediaURLs[row.id].push(row.media); //Add duplicate's media URL to array
      }
      return false; //Discard review duplicate
    });
    res.reviewData = filtered;
    next();
  });
};

const getStarData = (req, res, next) => {
  let starData = {
    counts: Array.from({length: 6}, i => 0),
    total: res.reviewData.length
  };
  let sum = 0;
  res.reviewData.forEach(row => {
    starData.counts[row.stars]++;
    sum += row.stars;
  });
  starData.average = (sum / starData.total).toFixed(1);
  res.starData = starData;
  console.log(starData);
  next();
};

const getFeatureData = (req, res, next) => {
  let featureData = {};
  res.reviewData.forEach(row => {
    if (row.feature !== null && !featureData.hasOwnProperty(row.feature)) {
      featureData[row.feature] = row.featureRating;
    }
  });
  console.log(featureData);
  res.featureData = featureData;
  next();
};

module.exports = {getReviewData, getStarData, getFeatureData};