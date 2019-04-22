/*
*
*
*       Complete the handler logic below
*       
*       
*/
/*let test = 'mi';
let test1 = test.substring(0,test.match(/mi$|lbs$|gal$/).index);
let test2 = test.substring(test.match(/mi|lbs|gal/).index,test.length);
console.log(test.match(/mi$|lbs$|gal$/));
console.log(test2);
console.log(test1.match(/\D/g));
console.log(test1.split('/').length);*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let unit = input.toLowerCase().match(/[A-Za-z]/)
    let number = input.substring(0,unit.index);
    let arr = number.split('/');
    if(arr.length>2){
      return 'invalid number';    
    }
    if(arr.length==2){
      if(!isNaN(arr[0])&&!isNaN(arr[1])){
        result = Number(arr[0])/Number(arr[1]);
      } else {
      return 'invalid number';
      }
    }
    if(arr.length==1){
      if(isNaN(arr[0])){
        return 'invalid number';
      } else {
      if(arr[0]==''){
        result = 1;
      } else {
      result = Number(arr[0]);
      }
      }
    }
    return result;
  };
  console.log(this.getNum('gala'));
  
  this.getUnit = function(input) {
    let result;
    let unit = input.toLowerCase().match(/mi$|lbs$|gal$|km$|l$|kg$/)
    if(unit==null){
      return 'invalid unit';
    }
    result = unit[0];
    return result;
  };
  console.log(this.getUnit('1.3GAL'));
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case 'mi':
        result = 'km';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        return initUnit;
    }
    
    return result;
  };
  //console.log(this.getReturnUnit(this.getUnit('1.3mi')));

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case 'mi':
        result = 'miles';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      default:
        return unit;
    }
    return result;
  };
  //console.log(this.spellOutUnit(this.getUnit('1.3mi')));
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(isNaN(initNum)){
      return initNum;
    }
    switch(initUnit){
      case 'mi':
        result = initNum*miToKm;
        break;
      case 'gal':
        result = initNum*galToL;
        break;
      case 'lbs':
        result = initNum*lbsToKg;
        break;
      case 'km':
        result = initNum/miToKm;
        break;
      case 'l':
        result = initNum/galToL;
        break;
      case 'kg':
        result = initNum/lbsToKg;
        break;
      default:
        return initUnit;
    }
    return parseFloat(result.toFixed(5));
  };
  const testnum = '5gal'
  console.log(this.convert(5,'gal'));
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(initUnit == 'invalid unit'&&isNaN(initNum)){
      return 'invalid number and unit';
    }
    if(initUnit == 'invalid unit'){
      return 'invalid unit';
    }
    if(isNaN(initNum)){
      return 'invalid number';
    }
    result = initNum+' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };  
//console.log(this.getString(this.getNum(testnum),this.getUnit(testnum),this.convert(this.getNum(testnum),this.getUnit(testnum)),this.getReturnUnit(this.getUnit(testnum))));

}
module.exports = ConvertHandler;

