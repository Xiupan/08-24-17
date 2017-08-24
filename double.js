function doubleNumbers(inputArr){
  var newArray = [];
  for (let i = 0; i < inputArr.length; ++i) {
    newArray.push(inputArr[i] * 2)
  }
  console.log(newArray);
  return newArray;
}

arrayOne = [1,2,3,4,5];

doubleNumbers(arrayOne);
