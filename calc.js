var expression="";
function fourfunction(operation) {
  if(operation == '+') {
    expression+="+";
    document.getElementById('addition').innerHTML=expression;

  }
  if(operation=='x'){
    expression+='*';
    document.getElementById('addition').innerHTML=expression;

  }
  if(operation == '/') {
    expression+="/";
    document.getElementById('addition').innerHTML=expression;

  }
  if(operation=='-'){
    expression+='-';
    document.getElementById('addition').innerHTML=expression;

  }
  console.log(expression);
}
function numbers(operation){
  if (operation=='.'){
    expression+='.';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='0'){
    expression+='0';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='1'){
    expression+='1';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='2'){
    expression+='2';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='3'){
    expression+='3';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='4'){
    expression+='4';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='5'){
    expression+='5';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='6'){
    expression+='6';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='7'){
    expression+='7';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='8'){
    expression+='8';
    document.getElementById('addition').innerHTML=expression;
  }
  if (operation=='9'){
    expression+='9';
    document.getElementById('addition').innerHTML=expression;
  }
}
function equals(operation){
  if (operation== '='){
    if (eval(expression)==Infinity){
      document.getElementById('addition').innerHTML="Error";
    }
    else if(eval(expression)>=1000){
      let exponent=expression.length;
      document.getElementById('addition').innerHTML=expression/(10^exponent)+'e'+exponent;

    }
    else{
      document.getElementById('addition').innerHTML=eval(expression);
    }

  }
    try {
      eval(expression)
    }
    catch(err) {
      document.getElementById('addition').innerHTML="Error";
    }
    ans=expression;
    expression=''
}
