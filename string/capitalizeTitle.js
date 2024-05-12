const capitalizeTitle = (title) => {
  const words = title.split(" ");
  const capitalizedWords = [];

  for (let word of words) {
    if (word.length <= 2) {
      capitalizedWords.push(word.toLowerCase());
    } else {
      capitalizedWords.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    }
  }

  return capitalizedWords.join(" ");
};

console.log(capitalizeTitle("capiTalIze tHe titLe"));
