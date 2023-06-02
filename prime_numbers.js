/* Print the prime numbers from 1 to 20 */
let initialNumber = 1;
let finalNumber = 20;

function isPrime(num) {
	/* revisa si num es prime  */
	if (num <= 1) return false;
	for (let i = 2; i < Math.floor(Math.sqrt(num) + 1); i++) {
		if (num % i == 0) return false;
	}
	return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(8));
