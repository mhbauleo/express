function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function getRandomIndex(arr) {
    return getRandomInt(0, arr.length);
  }

module.exports = getRandomIndex