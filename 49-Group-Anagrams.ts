function groupAnagrams(strs: string[]): string[][] {

    const hashMap = new Map<string, string[]>(); 

    for (let str of strs) {

      const key = str.split('').sort().join('');

    if (hashMap.has(key))
    {
    hashMap.get(key)!.push(str);
    } 
    
    else 
    {
    hashMap.set(key, [str]);
    }

    }

    return [...hashMap.values()];
};