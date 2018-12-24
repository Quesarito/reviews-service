const monthByNumber = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const formatDate = date => {
  date = new Date(date);
  let year = date.getFullYear();
  let month = monthByNumber[date.getMonth()];
  let day = date.getDate();
  return `${month} ${day}, ${year}`;
};

//Determine image position to display appropriate number of stars
//Half-star range: 0.3 - 0.8
//Each star is 30 x 30, 2px apart
//Half-star side starts 341px from the left
const setStars = (rating) => { 
  let modulo = rating % 1;
  let left = 0;

  if (modulo > 0.7) {
    left = (5 - Math.ceil(rating)) * 32;
  } else {
    left = (5 - Math.floor(rating)) * 32;
    left += (modulo > 0.2) ? 309 : 0;
  }
  return left;
};

export {formatDate, setStars};