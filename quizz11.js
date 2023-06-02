let a = "red";
let b = "blue";
checkValue();

let c = a;
a = b;
b = c;

checkValue();
function checkValue() {
	if (a == "red") {
		console.log("this is the default value");
	} else if (a == "blue") {
		console.log("there has been some change");
	} else {
		console.log("what is going on Padrine!!");
	}
}
