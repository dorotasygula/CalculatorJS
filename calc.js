var a = 0;
var b = 0;

function getValues() {
	b = parseInt(document.getElementById("input2").value, 10);
	a = parseInt(document.getElementById("input1").value, 10);
	
}


function add() 
{	var result = (a+b);
	document.getElementById("demo").innerHTML = result;
}



function subtract() 
{
	var result = (a-b);
	document.getElementById("demo").innerHTML = result;
}

function multiply() 
{
	var result = (a*b);
	document.getElementById("demo").innerHTML = result;
}

function divide() 
{
	if(b===0){
		alert("You can't divide by 0!");
	}
	else{
	var result = (a/b);
	document.getElementById("demo").innerHTML = result;
	}
}


	
	
function Math(){
	getValues();
	var operation = document.getElementById("chooseOperation").value;
	if (operation === "add"){	
		add();
	}
	else if (operation ==="subtract"){
		subtract();
	}
	else if (operation ==="multiply"){
		multiply();
	}
	else if (operation ==="divide"){
		divide();
	}
	
	
}