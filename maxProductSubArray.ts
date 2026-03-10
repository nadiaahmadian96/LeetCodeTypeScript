function maxProductSubArray(nums : number[]) : number {
    let curMin = nums[0];
    let curMax = nums[0];
    let result = nums[0];

    for ( let i = 1 ; i <nums.length ; i ++){
        const temp = curMax; 
        curMax = Math.max(nums[i] , curMax * nums[i], curMin * nums[i]); 
        curMin = Math.min(nums[i] , temp * nums[i], curMin * nums[i]); 
        result = Math.max(result, curMax);
    }
    return result;
}

console.log(maxProductSubArray([-2, 3, -4]));