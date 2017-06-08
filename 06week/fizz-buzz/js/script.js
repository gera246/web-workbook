html

<input id="myTextBox" type="text"/>
<br/>
<br/>
<button id="myButton">
Run!
</button>



java with fizz, buzz, and fizzbuzz (Correct!)


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

	if(number % 5 == 0 && number % 3 == 0)
  {
  console.log("fizzbuzz")
  }
  else{
  if(number % 3 == 0)
  {
  console.log("fizz");
	}
	if(number % 5 == 0)
	{
	console.log("buzz");
	}
  }

}
}
