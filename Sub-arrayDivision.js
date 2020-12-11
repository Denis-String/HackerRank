// Complete the birthday function below.
function birthday(s, d, m) {
  const bar = [...s];
  const day = d;
  const month = m;

  const next = month - 1;
  let isValid = 0;

  bar.forEach(((chunk, index) => {
    let total = chunk;
    for (let i = 1; i <= next; i ++) {
      if (bar[index + i]) total += bar[index + i];
    }
    if (total === day) isValid += 1;
  }));

  console.log(isValid);
}

birthday([1,2,1,3,2], 3, 2);
