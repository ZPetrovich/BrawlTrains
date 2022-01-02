console.log("Try to solve this...");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getRandomWholeIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * 10 * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

for (let i = 0; i < 4; i++) {
  // a + b * c - d
  generateExample1();

  // a - b * c - d
  generateExample2();

  // a + b * c : d
  generateExample3();

  // a - b * c + d
  generateExample4();
}

console.log('==========================')

// Whole numbers
for (let i = 0; i < 5; i++) {
  // a - d - b : c
  generateWholeNumbersProblem1();

  // a - b : c - d
  generateWholeNumbersProblem2();

  // a - b : c + d
  generateWholeNumbersProblem3();
}
generateWholeNumbersProblem1();
// ---

// a - d + b : c
function generateWholeNumbersProblem1() {
  let p1;
  let p2;
  let p3;
  let k;

  let res = -1;
  while (!check1000(res)) {
    p1 = getRandomIntInclusive(10, 100) * 10;
    p3 = getRandomIntInclusive(10, 100) * 10;
    k = getRandomIntInclusive(1, 10) * 10;
    p2 = getRandomIntInclusive(1, 10) * 1;

    if (!check1000(p1 + (p2 * k) / k)) {
      continue;
    }

    res = p1 - p3 - (p2 * k) / k;
  }

  console.log(`${p1} - ${p3} - ${p2 * k} : ${k} = ${res}`);
}

//   a - b : c - d
function generateWholeNumbersProblem2() {
  let p1;
  let p2;
  let p3;
  let k;

  let res = -1;
  while (!check1000(res)) {
    p1 = getRandomIntInclusive(10, 100) * 10;
    p3 = getRandomIntInclusive(10, 100) * 10;
    k = getRandomIntInclusive(1, 10) * 1;
    p2 = getRandomIntInclusive(1, 10) * 10;

    if (!check1000(p1 - (p2 * k) / k)) {
      continue;
    }

    res = p1 - (p2 * k) / k - p3;
  }

  console.log(`${p1} - ${p2 * k} : ${k} - ${p3} = ${res}`);
}

// a - b : c + d
function generateWholeNumbersProblem3() {
  let p1;
  let p2;
  let p3;
  let k;

  let res = -1;
  while (!check1000(res)) {
    p1 = getRandomIntInclusive(10, 100) * 10;
    p3 = getRandomIntInclusive(10, 100) * 10;
    k = getRandomIntInclusive(1, 10) * 1;
    p2 = getRandomIntInclusive(1, 10) * 10;

    if (!check1000(p1 - (p2 * k) / k)) {
      continue;
    }

    res = p1 - (p2 * k) / k + p3;
  }

  console.log(`${p1} - ${p2 * k} : ${k} + ${p3} = ${res}`);
}

// a - b * c + d
function generateExample4() {
  let p1;
  let p2;
  let p3;
  let p4;

  let res = -1;
  while (res < 0 || res > 100) {
    p1 = getRandomIntInclusive(1, 100);
    p2 = getRandomIntInclusive(3, 9);
    p3 = getRandomIntInclusive(4, 9);
    p4 = getRandomIntInclusive(1, 100);

    const p123 = p1 - p2 * p3;
    if (!check100(p123)) {
      continue;
    }

    res = p1 - p2 * p3 + p4;
  }

  console.log(`${p1} - ${p2} * ${p3} + ${p4} = ${res}`);
}

// a + b * c : d
function generateExample3() {
  let p1;
  let p2;
  let p3;
  let p4;

  let res = -1;
  while (res < 0 || res > 100) {
    p1 = getRandomIntInclusive(11, 89);
    p2 = getRandomIntInclusive(7, 9);
    const k = getRandomIntInclusive(3, 6);
    p4 = getRandomIntInclusive(2, 9);
    p3 = p4 * k;

    res = p1 + (p2 * p3) / p4;
  }

  console.log(`${p1} + ${p2} * (${p3} : ${p4}) = ${res}`);
}

// 0 < 12 - 4 * 5 - 19 <= 100
function generateExample2() {
  let p1;
  let p2;
  let p3;
  let p4;

  let res = -1;
  while (res < 0 || res > 100) {
    p1 = getRandomIntInclusive(1, 100);
    p2 = getRandomIntInclusive(3, 9);
    p3 = getRandomIntInclusive(4, 9);
    p4 = getRandomIntInclusive(11, 100);

    if (!check100(p1 - p2 * p3)) {
      continue;
    }

    res = p1 - p2 * p3 - p4;
  }

  console.log(`${p1} - ${p2} * ${p3} - ${p4} = ${res}`);
}

// 0 < 12 + 4 * 5 - 19 <= 100
function generateExample1() {
  let p1;
  let p2;
  let p3;
  let p4;

  let res = -1;
  while (res < 0 || res > 100) {
    p1 = getRandomIntInclusive(1, 100);
    p2 = getRandomIntInclusive(4, 9);
    p3 = getRandomIntInclusive(3, 9);
    p4 = getRandomIntInclusive(1, 100);

    if (!check100(p1 + p2 * p3)) {
      continue;
    }

    res = p1 + p2 * p3 - p4;
  }

  console.log(`${p1} + ${p2} * ${p3} - ${p4} = ${res}`);
}

function check100(a) {
  return a <= 100 && a > 0;
}

function check1000(a) {
  return a <= 1000 && a > 0;
}
