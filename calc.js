var expression="";
var symbol=false;
var inputLength=9;
var decimalZero=false;
var decimalPoint=true;
var decimalNum=false;
function fourfunction(operation) {
  if(operation == '+' && symbol==true) {
    expression+="+";
    document.getElementById('addition').innerHTML=expression;
    symbol=false;
    inputLength++;
  }
  if(operation=='x' && symbol==true){
    expression+='*';
    document.getElementById('addition').innerHTML=expression;
    symbol=false;

  }
  if(operation == '/' && symbol==true) {
    expression+="/";
    document.getElementById('addition').innerHTML=expression;
    symbol=false;
  }
  if(operation=='-' && symbol==true){
    expression+='-';
    document.getElementById('addition').innerHTML=expression;
    symbol=false;
  }
  if(operation == '%' && symbol==true){
    expression+='*.01'
    document.getElementById('addition').innerHTML=expression;

  }
  if (operation=='.' && symbol==true && decimalNum==false){
    expression+='.'+'0';
    document.getElementById('addition').innerHTML=expression;
    symbol=true;
    decimalZero=true;
    decimalPoint=true;
    decimalNum=true;
  }

}
function numbers(operation){
  if(decimalZero==true){
    let r=expression.split('')
    r.pop();
    expression=r.join('');
    decimalZero=false;
  }
  if (operation=='0'){
    expression+='0';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='1'){
    expression+='1';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='2'){
    expression+='2';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='3'){
    expression+='3';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='4'){
    expression+='4';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='5'){
    expression+='5';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='6'){
    expression+='6';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='7'){
    expression+='7';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='8'){
    expression+='8';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='9'){
    expression+='9';
    document.getElementById('addition').innerHTML=expression.toLocaleString();
    symbol=true;
  }
  if (operation=='ans'){
  expression+='ans';
  document.getElementById('addition').innerHTML=expression.toLocaleString();
  symbol=true;
  decimalNum=false;
  }
}
function AC(){
  expression='';
  symbol=false;
  document.getElementById('addition').innerHTML=expression.toLocaleString();
}

function equals(operation){
  let finalExpression=eval(expression);
  if (operation== '='){
    if (finalExpression==Infinity){
      document.getElementById('addition').innerHTML="Error";
    }
    else if(finalExpression>=1000000000){
      let exponent=finalExpression.toString().length-1;
      document.getElementById('addition').innerHTML=finalExpression/(10**(exponent))+'e'+exponent;

    }
    else{
      document.getElementById('addition').innerHTML=finalExpression.toLocaleString();
    }

  }
    try {
      finalExpression
    }
    catch(err) {
      document.getElementById('addition').innerHTML="Error";
    }
    ans=finalExpression;
    expression='';
    finalExpression='';
    console.log(eval(ans));
    decimalNum=false;
}
