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


// 2) создать конструктор Car
// свойства:
// - обьем топливного бака
// - расход
// - цвет ( по умолчанию черный)
// - марка
// - пробег
// - количество дверей( по умолчанию 5)
// - run функцич которая заставляет машину ехатьв параметры передаетсься количество километров (условно)
// остальные свойства по вашему усмотрению
//  создать 3 машины
//  задать параметры
//  парау раз запустить кгт для каждой машины
//  выести пробег каждой машины, и сколько топлива осталось

function Car(capasity, spand, colour = "black", mark,
mileage, dorsCount = 5, ){

  this.capasity = capasity;
  this.littersLeft = capasity;
  this.spand = spand;
  this.colour = colour;
  this.mark = mark;
  this.mileage = mileage;
  this.dorsCount = dorsCount;
  this.run = function(kilometters){

    this.littersLeft = this.littersLeft - (this.spand/100 * kilometters);
    if(this.littersLeft < 0){

      console.log("километров пройдено - " + this.mileage + "Закончилось топливо, вы больше не можете проехать столько");

  }else{
    this.mileage = this.mileage + kilometters;
  console.log("километров пройдено - " + this.mileage + "топлива осталось - " + this.littersLeft);
  };

  }

}
