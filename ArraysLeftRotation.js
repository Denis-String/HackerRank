function rotLeft(a, d) {
  let arr = [...a];
  for(let i = 1; i <= d; i++) {
    const number = arr.shift();
    arr.push(number);
  }
  console.log(arr);
  return arr;
}

rotLeft([1,2,3,4,5], 4)
