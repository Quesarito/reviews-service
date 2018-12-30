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

//Convert media urls in the reviews to double-linked list nodes
class MediaNode {
  constructor(url, reviewIndex, index, prev = null, next = null) {
    this.url = url;
    this.prev = prev;
    this.next = next;
    this.reviewIndex = reviewIndex;
    this.index = index;
  }
}

class MediaList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    if (this.head === null) { //Empty list
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const buildMediaList = reviewData => {
  let list = new MediaList();
  reviewData.forEach((review, reviewIndex) => {
    review.media = review.media.map((mediaURL, mediaIndex) => {
      let node = new MediaNode(mediaURL, reviewIndex, mediaIndex);
      list.addToTail(node);
      return node;
    });
  });
  return list;
}

export {formatDate, setStars, buildMediaList};