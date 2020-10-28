// Complete the staircase function below.
function staircase(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        let spaceSum = n - i;
        for (let j = 1; j <= spaceSum; j++) {
            result += ' ';
        }
        for (let k = 1; k <= i; k ++) {
            result += '#';
        }
        result += '\n';
    }
    console.log(result);
}

staircase(6);