function printText(){
	alert("Nama saya umar")
}
var x = 345 / 567
var x = x.toFixed(2)
document.getElementById('wrap').innerHTML = x;

y = Math.floor(Math.random() * 10) + 5;
document.getElementById('tag').innerHTML = y;

var huruf = ["anggo", "abian", "hamzah"];
document.getElementById('qwerty').innerHTML = huruf;

printText()


switch(huruf){
	case "anggo":
		alert('namanya adalah anggoro kriswanto');
		break;
	case "abian":
		alert('namanya adalah muhammad abian raihan');
		break;
	case "hamzah":
		alert('namanya adalah noerdin hamzah');
		break;
	default:
		alert('tidak ada nama')
}

var mobil ["avanza", "ayla", "alphard"];
{
console.log(mobil.length);
}
{
console.log(1+5/10*30);
}

// Create and assign variables
var dollars = 5;
var apples = 0;

onEvent("appleImage", "click", function( ) {
  buyApple();
});

function buyApple() {
  setText("info","I had " + apples + " apples.");
  dollars = dollars - 1;
  apples = apples + 1;
  setText("results", "Now I have " + apples + ".");
  setText("dollarsLabel", dollars);
}