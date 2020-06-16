import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {decimalToRomanNumeral} from './roman-numeral-library.js';

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var input = $("input").val();
    $("#result").text(input + " equals " + decimalToRomanNumeral(input) + " in Roman Numerals.");
  });
})