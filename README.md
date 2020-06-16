
# _Roman Numerals_

#### _This demonstrates knowledge of JavaScript._

#### By _**Matthew**_


## Description

_A page demonstrates basic javascript and behavior driven development_
_Page converts number into roman numeral_


## Tentative Algorithm
| Spec                                                                                                                        | Input | Ouput |
|-----------------------------------------------------------------------------------------------------------------------------|-------|-------|
| Return for equivalents                                                                                                      | 5     | V     |
| find largest numeral is less than value                                                                                     | 49    | X     |
| find largest numeral that is greater than value                                                                             | 49    | L     |
| find largest multiple that is less than value                                                                               | 49    | XXX   |
| find largest numeral that is higher than value and the numeral value on less then that value and preappend the lower value  | 49    | XL    |
| in some cases you cannt prepend 1 value down such as 9 as in IX or 900 or CM or 90 as in X and C 
| determine if 5 or 6 is higher if 6 is not over value otherwise default to 5                                                 | 49    | 6     |
| subtract determination made at step 7 from initial value if value is zero return 6                                          | 49    | 9     |
| repeat stages 5 through 7 for remaining value from step 8                                                                   | 9     | VIV   |
| sequentiall append all roman numeral made at step 9                                                                         | 49    | XLIX  |

## SPEC
| Spec                                                                                                                                                                           | Input | Output |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Implement equivalents- for simple equivalents such as V, I,M                                                                                                                   | 1000  | M      |
| Implement multiples -return simple equivalents such XX, C, MMM                                                                                                                 | 20    | XX     |
| Implement subtraction - where roman numeral value preceded by the value below it                                                                                               | 40    | XL     |
| Implement subtraction - where roman numeral value preceded two values below it                                                                                                 | 9     | IX     |
| Implemement reiteration (simple) - when the highest equivalent is found subtract that value and then find the highest equivalent for the difference, then merge those findings | 11    | XI     |
| Implement reiteration (simple) - When the highest multiple is found no more than 3 then subtract that from total and then find highest equivalent, then merge the findings     | 25    | XXV    |
| Implement reiterations with subtraction - Determine that subtraction gets closer to the highest value than multiplication and then subtract highest value and merge findings   | 45    | XLV    |
| Handle any complex number   | 1956    | MCMLVI    |

## Setup/Installation Requirements

Clone the repo and open the .html file in a browser.

## Known Bugs

_I don't think there are any bugs but please tell me if you see any._

## Support and contact details

_Open a Github issue if you see a problem or have questions_

## Technologies Used

_This is an html, css, Bootstrap, jQuery, and JavaScript thing._

### License

*Feel free to use this code as you please*

Copyright (c) 2020 **_Matthew_**
