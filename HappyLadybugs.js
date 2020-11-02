// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    const ladyBugs = b.split('');
    let possibleAllHappy = true;

    const calculatedLadyBugs = addLadybugsByColor(ladyBugs);

    if (hasLadybugAlone(calculatedLadyBugs)) {
        possibleAllHappy = false;
    } else if (!hasRoomToMove(calculatedLadyBugs) && !ladyBugsAreHappy(ladyBugs)) {
        possibleAllHappy = false;
    }
    
    return possibleAllHappy ? 'YES' : 'NO';
}

function addLadybugsByColor(ladyBugs) {
    const calculatedLadyBugs = ladyBugs.reduce((acc, lady) => {
        let formattedAcc = {...acc};

        if (acc[lady]) formattedAcc[lady] += 1;
        else formattedAcc[lady] = 1;

        return formattedAcc;
    }, {});
    return calculatedLadyBugs
}

function hasLadybugAlone(ladyBugs) {
    let hasAlone = false;
    Object.keys(ladyBugs).forEach(key => {
        if (key !== '_' && ladyBugs[key] === 1) {
            hasAlone = true;
        }
    });
    return hasAlone;
}

function hasRoomToMove(ladyBugs) {
    if (ladyBugs['_']) return true;
    else return false;
}

function ladyBugsAreHappy(ladyBugs) {
    let hasHappy;
    const hasHappyByColor = ladyBugs.reduce((acc, lady, index) => {
        let calculatedLadys = {...acc};
        if (ladyBugs[index + 1] === lady || ladyBugs[index - 1] === lady ) calculatedLadys[lady] = true;
        return calculatedLadys;
    }, {});
    hasHappy = ladyBugs.reduce((acc, curr) => {
        if (hasHappyByColor[curr]) acc = true;
        else acc = false;
        return acc;
    }, false);

    return hasHappy;
}
happyLadybugs('VVVAAAANNNEEIIIOO_________');