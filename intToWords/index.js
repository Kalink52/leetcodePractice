    // TODO:if handles for hundreds
    // ? i love you    How come this one's the question mark? I love you?
    // ! this is red
    // * this is green
    

const intToWords = (num) => {
  let result = "";
  const resultArray = [];
  const numString = num.toString();
  const numsArray = numString.split("");
  const numberWordList = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const placeList = ["", "", "Hundred", "Thousand", "Million", "Billion"];

  for (let index = 0; index < numsArray.length; index++) {
    let inverse = numsArray.length - index
    
    if (((inverse+1) % 3) === 0 && index !== 0) {
      resultArray.push("Hundred");
    }

    resultArray.push(numberWordList[numsArray[index]]);
  }

  resultArray.forEach((num) => {
    result += num + " ";
  });

  return result;
};

console.log(intToWords(1234));
module.exports = intToWords;

// the code runs backwards ie thousands, hundreds, tens, ones
// holderss

// .h..m .h..t .h..
