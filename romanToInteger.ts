// Problem: LeetCode 13 - Roman to Integer
// Given a roman numeral string, convert it to an integer.
// Example: "MCMXCIV" → 1994
//
// Solution: Map each symbol to its value. Scan left to right — if the current
// symbol is less than the next, subtract it (subtractive notation); otherwise add it.
// Time: O(n) | Space: O(1)
function romanToInt(s: string): number {
    const map = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])

    let result = 0 

    for(let i = 0 ; i<s.length; i ++){
        const curr = map.get(s[i])!
        const next = map.get(s[i + 1]) ?? 0

        if(curr < next ){
            result -= curr
        }else{
         result += curr
        }
    }
    return result
}

console.log(romanToInt("III"))  
console.log(romanToInt("IV"))   
console.log(romanToInt("MCMXCIV"))