function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = []; 
    const max: number = Math.max(...candies); 

    for (let i in candies) {
        (candies[Number(i)] + extraCandies) >= max ? result.push(true) : result.push(false); 
    }

    return result 
};