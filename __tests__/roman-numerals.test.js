import {findAppropriateMultiple, appendMultiples, decimalToRomanNumeral, findFirstRomanNumeralValueThatExceedsTheValueOfDecimal, findFirstRomanNumeralValueThatPrecedesOrEqualsTheValueOfDecimal} from '../src/roman-numeral-library.js'

describe("findAppropriateMultiple",()=>{



});

describe("appendMultiples",()=>{

});

describe("findFirstRomanNumeralValueThatExceedsTheValueOfDecimal",()=>{
  test("find largest numeral that is greater than value",()=>{
    const largest = findFirstRomanNumeralValueThatExceedsTheValueOfDecimal(49);
    expect(largest).toEqual("L");
  });
});

describe("findFirstRomanNumeralValueThatPrecedesOrEqualsTheValueOfDecimal",()=>{
  test("find largest numeral is less than value",()=>{
    const largest = findFirstRomanNumeralValueThatPrecedesOrEqualsTheValueOfDecimal(49);
    expect(largest).toEqual("X");
  });
});

describe("decimalToRomanNumeral",()=>{
  test('Return for equivalents', () => {
    const equivalent = decimalToRomanNumeral(5);
    expect(equivalent).toEqual("V"); 
  });

  test('Implement multiples -return simple equivalents such XX, C, MMM', () => {
    const equivalents = decimalToRomanNumeral(20);
    expect(equivalents).toEqual("XX");
   
  });

  test('Handle any complex number', () => {
    const complex = decimalToRomanNumeral(1956);
    expect(complex).toEqual("MCMLVI");
  });
});