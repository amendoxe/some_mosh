//hour
// If hour is between 6 am and 12 pm: Good morning!
//I it is between 12 om and 6 pm: Good afternoon!
//Otherwise:Good evening!

let hour = 19;

if (hour > 6 && hour < 12) {
	console.log("Good morning!!");
} else if (hour >= 12 && hour <= 18) {
	console.log("Good afternoon");
} else console.log("Good evening!");
