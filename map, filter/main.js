const nameArr = ['田中', '山田', '勇気'];

// for (i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2)

// nameArr.map((name, index) => {
//   console.log(`${index + 1}番目は${name}です`);
// });

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === '勇気') {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);