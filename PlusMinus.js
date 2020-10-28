function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  let base = arr.length;

  arr.forEach(number => {
      if (number === 0) zero += 1;
      else if (number > 0) positive += 1;
      else negative += 1;
  });
  const radios = (base, number) => {
    let sum = (number/base).toFixed(6);
    return sum;
  };

  console.log(radios(base, positive));
  console.log(radios(base, negative));
  console.log(radios(base, zero));
}

plusMinus([-4, 3, -9, 0, 4, 1]);