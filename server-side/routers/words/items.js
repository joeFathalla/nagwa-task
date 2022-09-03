const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// get random number depent on the property
const getItem = (array, property) => {
  let newArray = array.filter((el) => el.pos === property);
  return newArray[Math.floor(Math.random() * newArray.length)];
};

// shuffle elements
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
};

const getWordList = (array) => {
  let finalList = [];
  finalList.push(getItem(array, "adverb"));
  finalList.push(getItem(array, "noun"));
  finalList.push(getItem(array, "verb"));
  finalList.push(getItem(array, "adjective"));
  // removing the 4 items from the original array
  let newArray = [...array];
  finalList.forEach((item) => {
    newArray = newArray.filter((el) => el.id !== item.id);
  });
  let randomItem = null;
  // loop of choosing the other 6 words to make it total list 10
  for (let i = 0; i < 6; i++) {
    randomItem = getRandomItem(newArray);
    newArray = newArray.filter((el) => el.id !== randomItem.id);
    finalList.push(randomItem);
  }

  return shuffleArray(finalList);
};

export default getWordList;
