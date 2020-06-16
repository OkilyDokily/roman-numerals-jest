
let equivalentsMap = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"],[5000,"E"]]);
let equivalentsMapKeys = [...equivalentsMap.keys()];

export function findAppropriateMultiple(romanNumeralValue,decimal){ 
  for(var i = 1; i <= 4;i++) {
    if (romanNumeralValue * i > decimal) return i - 1;
  }
}

export function appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral){
  if(timesToMultipleRomanNumeral === 0) return "";
  return romanNumeralToMultiply + appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral-1);
}

export function findFirstRomanNumeralValueThatExceedsTheValueOfDecimal(decimal){
  for (let i = 0; i < equivalentsMapKeys.length; i++){
    if((equivalentsMapKeys[i]) > decimal) {
      return equivalentsMap.get(equivalentsMapKeys[i]);
    }
  }
}

export function decimalToRomanNumeral(decimal){
  if (decimal === 0) return "";
  if(decimal >3999) return "thats too high";

  
 
  let goesDownTwoWhenSubtracted = ["X","C","M"];
  
  let timesToMultipleRomanNumeral = 1;
  let romanNumeralToMultiply;
  let decimalOfRomanNumeralToMultiply;
  let totalDecimalOfMultiplies;

  let totalSubtractionDecimal;
  let firstSubtractionRomanNumeral;
  let secondSubtractionRomanNumeral;
  for(var i = 0; i < equivalentsMapKeys.length; i++){
    //find first roman numeral which exceeds the value of the decimal 
    if((equivalentsMapKeys[i] > decimal)){
      firstSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i]);
      if (goesDownTwoWhenSubtracted.includes(firstSubtractionRomanNumeral)){
        totalSubtractionDecimal = equivalentsMapKeys[i] - equivalentsMapKeys[i-2];
        secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i-2]);
      }
      else{
         secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i-1]);
         totalSubtractionDecimal = equivalentsMapKeys[i] - equivalentsMapKeys[i-1]; 
      }
      //decide whether to to reiterate using append multiples or appendsubtraction
      //if the current roman numeral subtract the previous roman numeral is greater than the decimal then we need to think in terms 
      //of multiple roman numerals in a sequence from 1 to 3.
      if(totalSubtractionDecimal > decimal){
        romanNumeralToMultiply = equivalentsMap.get(equivalentsMapKeys[i-1]);
        decimalOfRomanNumeralToMultiply = equivalentsMapKeys[i-1];
        timesToMultipleRomanNumeral = findAppropriateMultiple(decimalOfRomanNumeralToMultiply,decimal);
        totalDecimalOfMultiplies = timesToMultipleRomanNumeral * decimalOfRomanNumeralToMultiply;
        return appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral) + decimalToRomanNumeral(decimal - totalDecimalOfMultiplies);
      }
      else{
        //append lower value to higher value and then reiterate the function;
        return (secondSubtractionRomanNumeral + firstSubtractionRomanNumeral) + decimalToRomanNumeral(decimal - totalSubtractionDecimal);
      }
    }
  }
  
}

