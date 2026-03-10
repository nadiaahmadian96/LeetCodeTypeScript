function productExceptSelf(nums : number[]): number[]{
const result : number[] = new Array(nums.length).fill(1)

let prefix = 1 //Running Product from the Left
for ( let i = 0 ; i < nums.length ; i ++){
    result[i] = prefix
    //console.log(result)
    prefix *= nums[i]
   // console.log(prefix)
}


let suffix = 1 // running Product From the Right
for (let i  = nums.length -1 ; i >= 0 ; i--){
    result[i] *= suffix
    console.log(result)
    suffix *= nums[i]
    console.log(suffix)
}
 return result;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));