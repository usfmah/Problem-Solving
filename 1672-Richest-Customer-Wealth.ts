function maximumWealth(accounts: number[][]): number {
    let maxWealth: number = 0;

    for (const customer of accounts) {
        let sum: number = 0; 
        for(const bank of customer) {
            sum += bank;
        }
        
        maxWealth = Math.max(maxWealth, sum)
    }

    return maxWealth; 
};