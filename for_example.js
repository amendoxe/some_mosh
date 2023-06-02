/* foo bar bas */

let limit = 20;

for (let i = 1; i <= limit; i++) {
	message = "";
	if (i % 2 == 0) message += "foo";
	if (i % 3 == 0) message += "bar";
	if (i % 5 == 0) message += "baz";
	console.log("number: ", i, " is: ", message);
}
