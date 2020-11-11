// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesInSamHouse = 0;
    let orangesInSamHouse = 0;

    apples.forEach(apple => {
        if (apple > 0 && fruitInSanHouse(a, s, t, apple)) applesInSamHouse += 1
    });

    oranges.forEach(oranges => {
        if (oranges < 0 && fruitInSanHouse(b, s, t, oranges)) orangesInSamHouse += 1
    });

    console.log(applesInSamHouse);
    console.log(orangesInSamHouse);
}

function fruitInSanHouse(treePosition, startSamHouse, endSamHouse, fruitPosition) {
    const fruitPositionHouse = treePosition + fruitPosition;
    if (fruitPositionHouse >= startSamHouse && fruitPositionHouse <= endSamHouse) return true
    return false;
}

// countApplesAndOranges(7, 10, 4, 12, [2,3, -4], [3, -2,-4]);
countApplesAndOranges(7, 11, 5, 15, [-2,2, 1], [5, -6]);