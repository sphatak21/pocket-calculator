var expression="";
function fourfunction(operation) {
  if(operation == '+') {
    expression+="+";
  }
  if(operation=='x'){
    expression+='*';
  }
  if(operation == '/') {
    expression+="/";
  }
  if(operation=='-'){
    expression+='-';
  }
  console.log(expression);
}
function numbers(operation){
  if (operation=='.'){
    expression+='.';
  }
  if (operation=='0'){
    expression+='0';
  }
  if (operation=='1'){
    expression+='1';
  }
  if (operation=='2'){
    expression+='2';
  }
  if (operation=='3'){
    expression+='3';
  }
  if (operation=='4'){
    expression+='4';
  }
  if (operation=='5'){
    expression+='5';
  }
  if (operation=='6'){
    expression+='6';
  }
  if (operation=='7'){
    expression+='7';
  }
  if (operation=='8'){
    expression+='8';
  }
  if (operation=='9'){
    expression+='9';
  }
  console.log(expression);
}
function equals(operation){



  if (operation== '='){
    if (eval(expression)==Infinity){
      document.getElementById('addition').innerHTML="Error";
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
}
