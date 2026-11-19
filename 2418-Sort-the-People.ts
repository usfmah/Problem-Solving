function sortPeople(names: string[], heights: number[]): string[] {

    const people: [string, number][] = [];

    for (let i = 0; i < names.length; i++) {
        people.push([names[i], heights[i]]);
    }

    return people
        .sort((a, b) => b[1] - a[1])
        .map(([name, height]) => name);
}