/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let insertPos: number = 0;
    let temp = nums[0];
    for(let i: number = 0; i < nums.length; i++) {

        if (nums[i] != 0) {
            temp = nums[i];
            nums[i] = nums[insertPos];
            nums[insertPos] = temp;
            insertPos++;  
        }
    }


    
};