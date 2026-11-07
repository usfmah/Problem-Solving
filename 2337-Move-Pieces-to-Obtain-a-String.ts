function canChange(start: string, target: string): boolean {
    if (start.length !== target.length) return false;

    let startIdx = 0;
    let endIdx = 0;

    while (startIdx < start.length || endIdx < target.length) {
        if (start[startIdx] === '_') {
            startIdx++;
            continue;
        }

        if (target[endIdx] === '_') {
            endIdx++;
            continue;
        }

        if (start[startIdx] !== target[endIdx]) return false;

        if (start[startIdx] === 'L') {
            if (startIdx < endIdx) return false;
        }

        if (start[startIdx] === 'R') {
            if (startIdx > endIdx) return false;
        }

        startIdx++;
        endIdx++;
    }

    return startIdx === start.length && endIdx === target.length;
}
