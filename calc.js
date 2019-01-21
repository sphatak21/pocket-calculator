var expression='';
var displayExpression='';
var symbol=false;
var decimalZero=false;
var decimalPoint=true;
var decimalNum=false;
var numlength=1;
var ans='';
function fourfunction(operation) {
  if(operation == '+' && symbol==true) {
    expression+="+";
    displayExpression+="+";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
    numlength=1;
  }
  if(operation=='x' && symbol==true){
    expression+='*';
    displayExpression+="x";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
	numlength=1;
  }
  if(operation == '/' && symbol==true) {
    expression+="/";
    displayExpression+="/";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
    numlength=1;
  }
  if(operation=='-' && symbol==true){
    expression+='-';
    displayExpression+="-";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
    numlength=1;
  }
  if(operation == '%' && symbol==true){
    expression+='*.01'
    displayExpression+="%";
    document.getElementById('addition').innerHTML=displayExpression;
  }
  if (operation=='.' && symbol==true && decimalNum==false){
    expression+='.'+'0';
    displayExpression+='.'+'0';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    decimalZero=true;
    decimalPoint=true;
    decimalNum=true;

  }

}
function numbers(operation){
  if(decimalZero==true){
    let r=expression.split('')
    let q=displayExpression.split('')
    r.pop();
    q.pop();
    expression=r.join('');
    displayExpression=q.join('')
    decimalZero=false;
  }
  if (operation=="negation"){
	  let z=displayExpression.split('')
	  expression+="*-1";
	  let x=true;
	  for(let i=displayExpression.length-1;i>=0;i--){    
		  if((displayExpression[i]=='x'||displayExpression[i]=='/'||displayExpression[i]=='+'||displayExpression=='-') && x==true){  
			  x=false;
			  var tempArray=[];
			  for(let j=0; j<=i; j++){
				  let temp=z.shift();
				  tempArray[j]=temp;
			  }
			  z.unshift('-');
			  console.log(z);
			  let arrayLength=tempArray.length;
			  for(let k=0;k<arrayLength;k++){
				let temp2=tempArray.pop();
				z.unshift(temp2);
				console.log(z);
			  }
		  }	
		}
	  displayExpression=z.join('');
 	  document.getElementById('addition').innerHTML=displayExpression;
  }
  if (operation=='0' && numlength<=9){
    expression+='0';
    displayExpression+='0';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='1'&& numlength<=9){
    expression+='1';
    displayExpression+='1';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='2'&& numlength<=9){
    expression+='2';
    displayExpression+='2';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='3'&& numlength<=9){
    expression+='3';
    displayExpression+='3';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;    
  }
  if (operation=='4'&& numlength<=9){
    expression+='4';
    displayExpression+='4';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='5'&& numlength<=9){
    expression+='5';
    displayExpression+='5';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='6'&& numlength<=9){
    expression+='6';
    displayExpression+='6';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='7'&& numlength<=9){
    expression+='7';
    displayExpression+='7';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='8'&& numlength<=9){
    expression+='8';
    displayExpression+='8';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='9'&& numlength<=9){
    expression+='9';
    displayExpression+='9';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='ans' && ans != ''){
  expression+='ans';
  displayExpression+='ans';
  document.getElementById('addition').innerHTML=displayExpression;
  symbol=true;
  decimalNum=false;
  }
}
function AC(){
  expression='';
  displayExpression='';
  symbol=false;
  document.getElementById('addition').innerHTML=displayExpression;
	decimalZero=false;
	decimalPoint=true;
	decimalNum=false;
	numlength=1;
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
    displayExpression='';
    finalExpression='';

    
}
