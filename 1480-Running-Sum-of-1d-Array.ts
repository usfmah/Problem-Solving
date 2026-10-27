
function runningSum(nums: number[]): number[] {
  const ans: number[] = [];
  let sum = 0;

  for (let num of nums) {
    sum += num;
    ans.push(sum);
  }

  return ans;
}
