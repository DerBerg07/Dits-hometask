"use strict"
function Calculate(first, second){

  this.first = first;
  this.second = second;
  //число 1 + число 2
  this.add = function(){
    let result = this.first + this.second;
    this.history = this.first + "+" + this.second + "=" + result;
    return result;
  };
    //число 1 - число 2
  this.minus = function(){
    let result = this.first - this.secon1d;
    this.history = this.first + "-" + this.second + "=" + result ;
    return result;
  };
    //число 1 + число 2
  this.multiply = function(){
    let result = this.first * this.second;
    this.history = this.first + "*" + this.second + "=" + result;
    return result;
  };
  //число 1 / число 2
  this.segmentation = function(){
    let result = this.first / this.second;
    this.history = this.first + "/" + this.second + "=" + result;
    return result;
  };
  //найти сколько % число 1 от числа 2
this.persent =  function(){
  let result = 100/(this.first / this.second);
  this.history = this.second + "%" + this.first + "=" + result + "%";
  return result;
}
}
//Создание объекта калькулятор
let calc = new Calculate(720,40);



console.log(calc.add());
console.log(calc.history);
console.log(calc.persent());
console.log(calc.history);
console.log(calc.segmentation());
console.log(calc.history);
console.log(calc.multiply());
console.log(calc.history);
