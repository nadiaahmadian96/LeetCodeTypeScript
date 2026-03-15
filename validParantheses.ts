// Problem: LeetCode 20 - Valid Parentheses
// Given a string containing only '(', ')', '{', '}', '[', ']', determine if it is valid.
// A string is valid if every open bracket is closed by the same type in the correct order.
// Example: "()[]{}" → true, "(]" → false
//
// Solution: Stack-based matching.
// Push open brackets onto the stack; for each closing bracket, pop and verify it matches.
// Valid if the stack is empty at the end.
// Time: O(n) | Space: O(n)
function isValid(s: string) : boolean {
    const stack : string[] = [];
    const map = new Map(
        [
            [')','('],
            [']','['], 
            ['}','{']
        ]
    );
    for(const c of s){
      if (c === "(" || c === "[" || c ==="{")  {
        stack.push(c)
      }
      else{
        if (stack.pop() !== map.get(c)){
            return false;
        }
      }

    }
   return stack.length === 0;

}

console.log(isValid("({[]}"));