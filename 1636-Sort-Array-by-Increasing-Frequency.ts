function frequencySort(nums: number[]): number[] {
    const hashMap = new Map<number, number>();
    
    for (const num of nums) { 
        hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
    }

    return [...hashMap.entries()].
    sort((a, b) => a[1] - b[1] || b[0] - a [0]).
    flatMap(([num, count]) => Array(count).fill(num));

};