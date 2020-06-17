
let equivalentsMap = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"],[5000,"E"]]);
let equivalentsMapKeys = [...equivalentsMap.keys()];
let goesDownTwoWhenSubtracted = ["X","C","M"];

export function findAppropriateMultiple(romanNumeralValue,decimal){ 
  for(let i = 1; i <= 4;i++) {
    if (romanNumeralValue * i > decimal) return i - 1;
  }
}

export function appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral){
  if(timesToMultipleRomanNumeral === 0) return "";
  return romanNumeralToMultiply + appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral-1);
}

export function findIndexOfValueThatExceedsTheValueOfDecimal(decimal){
  for (let i = 0; i < equivalentsMapKeys.length; i++){
    if((equivalentsMapKeys[i]) > decimal) {
      return i;
    }
  }
}

export function findFirstRomanNumeralValueThatExceedsTheValueOfDecimal(decimal){
      let i = findIndexOfValueThatExceedsTheValueOfDecimal(decimal);
      return equivalentsMap.get(equivalentsMapKeys[i]);
}

export function findFirstRomanNumeralValueThatPrecedesOrEqualsTheValueOfDecimal(decimal){
  let i = findIndexOfValueThatExceedsTheValueOfDecimal(decimal);
  return equivalentsMap.get(equivalentsMapKeys[i - 1]);
}

export function prependLowerRomanNumeralToHigherRomanNumeralInCaseOfSubtraction(decimal){
  let index = findIndexOfValueThatExceedsTheValueOfDecimal(decimal);
  let firstSubtractionRomanNumeral = findFirstRomanNumeralValueThatExceedsTheValueOfDecimal(decimal);
  let secondSubtractionRomanNumeral;
  if (goesDownTwoWhenSubtracted.includes(firstSubtractionRomanNumeral)){//some roman numerals require you go down two values in the equivalentsMapKeys when subtracting
    secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[index-2]);
  }
  else{//otherwise only go down by one Roman Numeral value
    secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[index-1]);
  }
  return secondSubtractionRomanNumeral + firstSubtractionRomanNumeral;
}

export function findLargestMultipleThatIsLessThanValue(decimal){
  let index = findIndexOfValueThatExceedsTheValueOfDecimal(decimal);
  let romanNumeralToMultiply = findFirstRomanNumeralValueThatPrecedesOrEqualsTheValueOfDecimal(decimal);
  let decimalOfRomanNumeralToMultiply = equivalentsMapKeys[index-1];
  let timesToMultipleRomanNumeral = findAppropriateMultiple(decimalOfRomanNumeralToMultiply,decimal);
  
  return appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral)
}

//referred to as decimal rather than inputted number because
//this is a recursive function.
export function decimalToRomanNumeral(decimal){
  if (decimal === 0) return "";
  if(decimal >3999) return "thats too high";

  let index = findIndexOfValueThatExceedsTheValueOfDecimal(decimal);
 
  let totalSubtractionDecimal;

  let firstSubtractionRomanNumeral = findFirstRomanNumeralValueThatExceedsTheValueOfDecimal(decimal);


  if (goesDownTwoWhenSubtracted.includes(firstSubtractionRomanNumeral)){//some roman numerals require you go down two values in the equivalentsMapKeys when subtracting
    totalSubtractionDecimal = equivalentsMapKeys[index] - equivalentsMapKeys[index-2];
  }
  else{ //otherwise just go down one value when subtracting
    totalSubtractionDecimal = equivalentsMapKeys[index] - equivalentsMapKeys[index-1]; 
  }
  //final step where we append either multiples of roman numerals or subtraction roman numeral pairs and then reiterate the function
  if(totalSubtractionDecimal > decimal){// if this is case then we need to append multiple roman numerals rather than use subtractive roman numerals
    let decimalOfRomanNumeralToMultiply = equivalentsMapKeys[index-1];
    let timesToMultipleRomanNumeral = findAppropriateMultiple(decimalOfRomanNumeralToMultiply,decimal);
    let totalDecimalOfMultiplies = timesToMultipleRomanNumeral * decimalOfRomanNumeralToMultiply;
    return findLargestMultipleThatIsLessThanValue(decimal) + decimalToRomanNumeral(decimal - totalDecimalOfMultiplies);
  }
  else{
    //append lower value to higher value and then reiterate the function;
    return (prependLowerRomanNumeralToHigherRomanNumeralInCaseOfSubtraction(decimal)) + decimalToRomanNumeral(decimal - totalSubtractionDecimal);
  }

}

