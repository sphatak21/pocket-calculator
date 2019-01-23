var expression='';
var displayExpression='';
var symbol=false;
var decimalZero=false;
var decimalPoint=true;
var decimalNum=false;
var numlength=1;
var ans='';
var ansNum=false;
function fourfunction(operation) {
  if(operation == '+' && symbol==true) {
    expression+="+";
    displayExpression+="+";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
    numlength=1;
    ansNum=false
  }
  if(operation=='x' && symbol==true){
    expression+='*';
    displayExpression+="x";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
	numlength=1;
	ansNum=false
  }
  if(operation == '/' && symbol==true) {
    expression+="/";
    displayExpression+="/";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
    numlength=1;
    ansNum=false
  }
  if(operation=='-' && symbol==true){
    expression+='-';
    displayExpression+="-";
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=false;
    numlength=1;
    ansNum=false
  }
  if(operation == '%' && symbol==true){
    expression+='*.01'
    displayExpression+="%";
    document.getElementById('addition').innerHTML=displayExpression;
    ansNum=false
  }
  if (operation=='.' && symbol==true && decimalNum==false && ansNum==false){
    expression+='.'+'0';
    displayExpression+='.'+'0';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    decimalZero=true;
    decimalPoint=true;
    decimalNum=true;
  }
  if(operation=='x^2' && symbol==true){
	displayExpression+='^2';
	expression+='**2';
    document.getElementById('addition').innerHTML=displayExpression;
  }
  if(operation=='x^3' && symbol==true){
	displayExpression+='^3';
	expression+='**3';
	document.getElementById('addition').innerHTML=displayExpression;
  }
  if(operation=='x^y' && symbol==true){
	displayExpression+='^';
	expression+='**';
	document.getElementById('addition').innerHTML=displayExpression;
	ansNum=false;
	symbol=false;
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

  if(operation=='del') {
	  let z=displayExpression.split('');
	  let r=expression.split('');

	  if(z[z.length-1]=='^'){
	    z.pop();
	    r.pop();
	    r.pop();
	  }else{
      let temp=z.pop();
      let temp2=r.pop();
      if(Number.isInteger(Number(temp))){
        symbol=false;
      }else{
        symbol=true;
      }
    }
    numlength--;
	  expression=r.join('');
	  displayExpression=z.join('')
	  document.getElementById('addition').innerHTML=displayExpression;
  }
  if (operation=="negation"){
	  let z=displayExpression.split('');
	  let r=expression.split('');

	  let x=true;
	  let y=true;
	  for(let i=displayExpression.length-1;i>=0;i--){
		  if((displayExpression[i]=='x'||displayExpression[i]=='/'||displayExpression[i]=='+'||displayExpression=='-'||displayExpression[i]=='^') && x==true){
			  x=false;
			  var tempArray=[];
			  for(let j=0; j<=i; j++){
				  let temp=z.shift();
				  tempArray[j]=temp;
			  }
			  z.unshift('-');
			  let arrayLength=tempArray.length;
			  for(let k=0;k<arrayLength;k++){
				let temp2=tempArray.pop();
				z.unshift(temp2);
			  }
		  }
	  }
	  for(let n=expression.length-1; n>=0;n--){
		if((expression[n]=='*'||expression[n]=='-'||expression[n]=='+'||expression[n]=='/')&& y==true){
			y=false;
			var tempArray2=[];
			for(let m=0;m<=n;m++){
				let temp=r.shift();
				tempArray2[m]=temp;
				console.log(tempArray);
			}
			console.log("1.")
			console.log(r)
			r.unshift('-');
			console.log("2.")
			console.log(r);
			let arrayLength2=tempArray2.length;
			for(let s=0;s<arrayLength2;s++){
				let temp2=tempArray2.pop();
				r.unshift(temp2);
			}
		}
	  }
	if(x==true){
	  z.unshift('-');
	}
	if(y==true){
	  r.unshift('-');
	}
	displayExpression=z.join('');
 	expression=r.join('');
 	document.getElementById('addition').innerHTML=displayExpression;
  }


  if (operation=='0' && numlength<=9 && ansNum==false){
    expression+='0';
    displayExpression+='0';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='1'&& numlength<=9 && ansNum==false){
    expression+='1';
    displayExpression+='1';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='2'&& numlength<=9 && ansNum==false){
    expression+='2';
    displayExpression+='2';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='3'&& numlength<=9 && ansNum==false){
    expression+='3';
    displayExpression+='3';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='4'&& numlength<=9 && ansNum==false){
    expression+='4';
    displayExpression+='4';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='5'&& numlength<=9 && ansNum==false){
    expression+='5';
    displayExpression+='5';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='6'&& numlength<=9 && ansNum==false){
    expression+='6';
    displayExpression+='6';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='7'&& numlength<=9 && ansNum==false){
    expression+='7';
    displayExpression+='7';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='8'&& numlength<=9 && ansNum==false){
    expression+='8';
    displayExpression+='8';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='9'&& numlength<=9 && ansNum==false){
    expression+='9';
    displayExpression+='9';
    document.getElementById('addition').innerHTML=displayExpression;
    symbol=true;
    numlength++;
  }
  if (operation=='ans' && ans != '' && symbol==false){
  expression+='ans';
  displayExpression+='ans';
  document.getElementById('addition').innerHTML=displayExpression;
  symbol=true;
  decimalNum=false;
  ansNum=true;
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
  ansNum=false;
}
function commas(displayExpression){
  let r=displayExpression.split('');
  for(let i=displayExpression.length-1;i>=0;i--){
    if(displayExpression[i]=='x'||displayExpression[i]=='/'||displayExpression[i]=='^'||displayExpression[i]=='-'||displayExpression[i]=='+'){

    }
  }


}
function equals(operation){
  let finalExpression=eval(expression);
  if (operation== '='){
    if (finalExpression==Infinity||finalExpression==undefined){
      console.log(finalExpression)
      document.getElementById('addition').innerHTML="U Hav Made A Grave Mistake";
    }
    else if(finalExpression>=1000000000){
      let exponent=finalExpression.toString().length-1;
      document.getElementById('addition').innerHTML=finalExpression/(10**(exponent))+'e'+exponent;

    }
    else if(finalExpression<=-1000000000){
	  let exponent=finalExpression.toString().length-2;
	  document.getElementById('addition').innerHTML=finalExpression/(10**(exponent))+'e'+exponent;
	}
    else{
      document.getElementById('addition').innerHTML=finalExpression.toLocaleString();
    }

  }

    ans=finalExpression;
    expression='';
    displayExpression='';
    finalExpression='';
    ansNum=false;
    symbol=false;

}
