def doubleNumbers(inputArr)
  newArray = []
  inputArr.each do |x|
    newArray.push(x * 2)
  end
  puts newArray
  return newArray
end

arrayOne = [1,2,3,4,5]

doubleNumbers(arrayOne)
