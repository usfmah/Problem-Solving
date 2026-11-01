function removeElement(nums: number[], val: number): number {
    let left: number = 0; 
    let right: number = nums.length - 1; 

    while(left <= right) {
        let temp: number = 0;
        if (nums[left] == val && nums[right] !== val) {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }

        if (nums[left] !== val) left++;
        if(nums[right] == val) right--;
    }

    return left; 
};
