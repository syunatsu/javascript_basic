// 論理演算子の本当の意味を知る

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log('1か2はtrueになります');
// }
// if (flag1 && flag2){
//   console.log('1も2もtrueになります');
// }


// ||は左側がfalseとなるときに右側を返す
const num = 100;
const fee = num || '金額未設定です';
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num && '何か設定されました'
console.log(fee2);