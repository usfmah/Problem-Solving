function largestNumber(nums: number[]): string {

    const strs: string = nums.map((num) => String(num)).sort((a, b) => (b + a).localeCompare(a + b)).join(''); 

    if (strs[0] === "0") return "0";
    
    return strs; 
};