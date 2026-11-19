function isValid(s: string): boolean {
    const stack: string[] = []; 

    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') { 
            stack.push(char); 
        }
        else {
            const top: string = stack.pop(); 

            if (top !== pairs[char]) {
                return false; 
            }
        }
    }

    return true;
};