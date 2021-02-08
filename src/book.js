function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character =  {
    name: name,
    age: age,
    pronouns: pronouns,
  }

  return character;
};

function saveReview(review, array) {
  if (array.includes(review)) {
    return array;
  } else {
    array.push(review);
    return array;
  }
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
};
