html

<input id="myTextBox" type="text"/>
<br/>
<br/>
<button id="myButton">
Run!
</button>



JavaScript

document.getElementById("myTextBox").value
document.getElementById("myButton").addEventListener("click", defaultFunction);

function defaultFunction()
{
var number = 0;
while (number < 100){
number = number + 1;
 console.log(number);
}

}




java with fizz

document.getElementById("myTextBox").value
document.getElementById("myButton").addEventListener("click", defaultFunction);

function defaultFunction()
{
var number = 0;
var fizz = number % 3;
var buzz = number % 5;

while (number < 100){
number = number + 1;

if(number % 3 != 0){
	console.log(number);
}
else(
	console.log("fizz"))

if(number % 5 != 0){
	console.log(number);
}
else(
	console.log("buzz"))

}

}




java with fizz and buzz


document.getElementById("myTextBox").value
document.getElementById("myButton").addEventListener("click", defaultFunction);

function defaultFunction()
{
var number = 0;

while (number < 100){
number = number + 1;

if(number % 3 != 0 && number % 5 != 0)
{
	console.log(number);
}
else
{
	if (number % 3 != 0)
  {
  console.log("fizz");
	}
	if(number % 5 == 0)
	{
	console.log("buzz");
	}
}
}
