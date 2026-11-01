function pivotIndex(nums: number[]): number {
    const sum: number = nums.reduce((acc, i) => acc + i, 0);
    let leftSum: number = 0;
    let rightSum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        rightSum = sum - leftSum - nums[i];
        if (leftSum == rightSum) return i; 
        leftSum += nums[i];
    }

    return -1;
};