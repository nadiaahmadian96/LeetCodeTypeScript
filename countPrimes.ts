// Problem: LeetCode 204 - Count Primes
// Given an integer n, return the number of prime numbers strictly less than n.
// Example: n = 10 → 4  (primes: 2, 3, 5, 7)
//
// Solution: Sieve of Eratosthenes — mark all multiples of each prime as composite.
// Any index still unmarked after the sweep is a prime.
// Time: O(n log log n) | Space: O(n)
function countPrimes(n : number) : number{
    if(n<2) return 0 
    const isComposite = new Array(n).fill(false)

    let count = 0 

    for(let i = 2; i<n ; i ++){
        if(!isComposite[i]){
            count ++
            for(let j = i * 2 ; j <n ; j += i){
                isComposite[j] = true 
            }
        }
    }
    return count 
}

console.log(countPrimes(7))