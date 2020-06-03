const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const review = [
  {
    "name": "Reviewing Hobbyist",
    "stars": 4,
    "date": "January 10, 2020",
    "country": "the United States",
    "review": "Gone are the days of biting off slice-sized chunks of banana and spitting them onto a serving tray. Next on my wish list: a kitchen tool for dividing frozen water into cube-sized chunks.",
    "image": "",
    "title": "Best Hutzler 571 Banana Slicer",
    "avatar": 2,
    "foundThisHelpful": 1952
  },
  {
    "name": "Wrong Bananas",
    "stars": 2,
    "date": "August 1, 2012",
    "country": "Paris",
    "review": "I tried the banana slicer and found it unacceptable. As shown in the picture, the slicer is curved from left to right. All of my bananas are bent the other way.",
    "image": "",
    "title": "Angle is wrong",
    "avatar": 4,
    "foundThisHelpful": 15699
  },
  {
    "name": "Spoiler",
    "stars": 1,
    "date": "April 19, 2012",
    "country": "the United States",
    "review": "This book is completely misleading. The entire plot revolves around finding Babys belly button. the title makes this much clear from the beginning. However, there is no mystery. There is no twist. Babys belly button is right where its suppose to be, on Babys stomach. Right where it clearly SHOWS you it is on the COVER OF THE BOOK. This plot is a complete mess as a result of its reliance on the mystery of where the belly button is. everything falls apart the second you realize that the belly button was in plain sight all along. There is no conflict, there is no character development, and there is scarcely any plot. Whoever wrote this book must have a serious error in judgement, because you would have to be an infant to not immediately understand where Babys belly button is. This is one of the worst pieces of literature I have ever read.",
    "image": "",
    "title": "DO NOT buy this book, you can SEE the ending right on the cover!",
    "avatar": 1,
    "foundThisHelpful": 1051
  },
  {
    "name": "UFO",
    "stars": 1,
    "date": "September 7, 2012",
    "country": "the United States",
    "review": "I dont know if this is a scam or if mine was broken, but it doesnt work and I am still getting abducted by UFOs on a regular basis.",
    "image": "",
    "title": "One star is too much for this product",
    "avatar": 5,
    "foundThisHelpful": 789
  },
  {
    "name": "Animal Enthusiast",
    "stars": 1,
    "date": "May 6, 2016",
    "country": "the United States",
    "review": "There were no wolves in the movie let alone in the streets near the walls",
    "image": "",
    "title": "There were no wolves in the movie -_-",
    "avatar": 2,
    "foundThisHelpful": 1952
  },
];

module.exports = {
  getRandom,
  review
}
