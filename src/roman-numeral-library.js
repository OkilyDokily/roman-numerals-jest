
let equivalentsMap = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"],[5000,"E"]]);
let equivalentsMapKeys = [...equivalentsMap.keys()];

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
      console.log(i)
      return i;
    }
  }
}

export function findFirstRomanNumeralValueThatExceedsTheValueOfDecimal(decimal){
      let i = findIndexOfValueThatExceedsTheValueOfDecimal(decimal);
      return equivalentsMap.get(equivalentsMapKeys[i]);
}
//referred to as decimal rather than inputted number because
//this is a recursive function.
export function decimalToRomanNumeral(decimal){
  if (decimal === 0) return "";
  if(decimal >3999) return "thats too high";

  let index = findIndexOfValueThatExceedsTheValueOfDecimal(decimal);
 
  let goesDownTwoWhenSubtracted = ["X","C","M"];
  
  let timesToMultipleRomanNumeral = 1;
  let romanNumeralToMultiply;
  let decimalOfRomanNumeralToMultiply;
  let totalDecimalOfMultiplies;

  let totalSubtractionDecimal;

  
  let firstSubtractionRomanNumeral = findFirstRomanNumeralValueThatExceedsTheValueOfDecimal(decimal);
  let secondSubtractionRomanNumeral;


  if (goesDownTwoWhenSubtracted.includes(firstSubtractionRomanNumeral)){
    totalSubtractionDecimal = equivalentsMapKeys[index] - equivalentsMapKeys[index-2];
    secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[index-2]);
  }
  else{
    secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[index-1]);
    totalSubtractionDecimal = equivalentsMapKeys[index] - equivalentsMapKeys[index-1]; 
  }

  if(totalSubtractionDecimal > decimal){
    romanNumeralToMultiply = equivalentsMap.get(equivalentsMapKeys[index-1]);
    decimalOfRomanNumeralToMultiply = equivalentsMapKeys[index-1];
    timesToMultipleRomanNumeral = findAppropriateMultiple(decimalOfRomanNumeralToMultiply,decimal);
    totalDecimalOfMultiplies = timesToMultipleRomanNumeral * decimalOfRomanNumeralToMultiply;
    return appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral) + decimalToRomanNumeral(decimal - totalDecimalOfMultiplies);
  }
  else{
    //append lower value to higher value and then reiterate the function;
    return (secondSubtractionRomanNumeral + firstSubtractionRomanNumeral) + decimalToRomanNumeral(decimal - totalSubtractionDecimal);
  }

}

