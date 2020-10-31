// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let smallList = [...arr.sort((a, b) => a - b)];
    let bigList = [...arr.sort((a, b) => b - a)];

    smallList.pop();
    bigList.pop();

    let totalSmall = smallList.reduce((acc, curr) => acc += curr);
    let totalBig = bigList.reduce((acc, curr) => acc += curr);
    console.log(totalSmall, totalBig);
}

miniMaxSum([5,5,5,5,5]);