// let X = [12, 34, 56, 78, 90];
// console.log(X[3]);

// let Y = [
//   [30, 40, 50],
//   [25, 35, 45],
//   [15, 98, 76],
// ];
// console.log(Y[1][2]);

//daalgavar1
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log("жимснүүд : ", fruits);
console.log(fruits[0]);
console.log(fruits[4]);
console.log(fruits[2]);

//daalgavar2
let too = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let tegshToo = 0;
let sondgoiToo = 0;
console.log("тоонууд : ", too);
for (let index = 0; index < too.length; index++) {
  if (too[index] % 2 == 0) {
    tegshToo++;
  } else {
    sondgoiToo++;
  }
}
console.log("Өгөгдсөн тоонуудын тэгш тоонуудын тоо : ", tegshToo);
console.log("Өгөгдсөн тоонуудын сондгой тоонуудын тоо : ", sondgoiToo);

//daalgavar3
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log("arrayOfNumbers : ", arrayOfNumbers);
//3-1
let length = arrayOfNumbers.length;
console.log("arrayOfNumbers тооны тоо ширхэг : ", length);

//3-2
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
console.log("arrayOfNumbers тооны нийлбэр : ", sum);

//3-3
average = sum / length;
console.log("arrayOfNumbers тооны дундаж : ", average);

//3-4
sum = 0;
let X = -1;
while (X++ < arrayOfNumbers.length) {
  sum += arrayOfNumbers[X];
}
console.log("arrayOfNumbers тооны нийлбэр while ашигласан : ", sum);

//3-5
let EvenSum = 0;
for (let I = 0; I < arrayOfNumbers.length; I++) {
  if (arrayOfNumbers[I] % 2 == 0) {
    EvenSum += arrayOfNumbers[I];
  }
}
console.log("arrayOfNumbers тэгш тооны нийлбэр : ", EvenSum);

//3-6
let OddUrjver = 1;
for (let y = 0; y < arrayOfNumbers.length; y++) {
  if (arrayOfNumbers[y] % 2 == 1) {
    OddUrjver *= arrayOfNumbers[y];
  }
}
console.log("arrayOfNumbers сондгой тоонуудын үржвэр : ", OddUrjver);

//3-7
let largeN = arrayOfNumbers[0];
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (largeN < arrayOfNumbers[i]) {
    largeN = arrayOfNumbers[i];
    console.log(arrayOfNumbers[i]);
  }
}
console.log("arrayOfNumbers ийн хамгийн их тоо : ", largeN);

//3-8
let minN = arrayOfNumbers[0];
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (minN > arrayOfNumbers[i]) {
    minN = arrayOfNumbers[i];
  }
}
console.log("arrayOfNumbers ийн хамгийн бага тоо : ", minN);

let nae = "erdenesuren";
console.log(nae[0]);
console.log(nae[1]);
console.log(nae[2]);
console.log(nae[3]);
console.log(nae[4]);
console.log(nae[5]);
console.log(nae[6]);
console.log(nae[7]);
console.log(nae[8]);
console.log(nae[9]);
console.log(nae[10]);
