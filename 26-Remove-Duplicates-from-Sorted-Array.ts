function removeDuplicates(nums: number[]): number {
    let minNum: number = nums.length > 0 ? Math.min(...nums) : 0; 
    let maxNum: number = nums.length > 0 ? Math.max(...nums) : 0;

    let offset: number = -minNum; 
    let visited: boolean[] = Array(maxNum - minNum + 1).fill(false);
    let stepBackword: number = 0;

    for(let i = 0; i < nums.length; i++) {
        if (visited[nums[i] + offset] == true) {
            stepBackword++; 
            continue; 
        }
       nums[i - stepBackword] = nums[i];
        visited[nums[i] + offset] = true;


    }
            return (nums.length - stepBackword)

}