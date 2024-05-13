const isValid = (word) => {
  return /^(?=.*[aeiouAEIOU])(?=.*[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z])[a-zA-Z0-9]{3,}$/.test(
    word
  );
};

console.log(isValid("234Adas"));
