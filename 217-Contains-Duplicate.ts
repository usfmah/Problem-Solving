function containsDuplicate(nums: number[]): boolean {
    const map = new Map <number, number>();

    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }    

    for (const val of map.values()) {
        if (val > 1) return true; 
    }

    return false; 
};