'use strict';

let input = 0;
input = prompt('Please enter a number!');
input = Number(input);

function find_primes (n) {
    // Generate an object with every number in the set associated with true
    let primes = {};
    for (let i=n; i; i--){
        primes[i] = true;
    }
    // Find primes by utilizing the sieve of eristothenes
    let check = 2;
    while (n >= check * check){
        if (primes[check]) {
            for (let i=check * check; i < n+1; i+=check){
                primes[i] = false;
            }
        }
        check++;
        console.log(check);
    }
    return primes;
}

let primes = find_primes(input);
console.log(primes);