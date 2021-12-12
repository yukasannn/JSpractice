//コメントです
console.log("Hello world");//コメントです

let message = "Hello world"; //「message」という変数を定義し、「Hello world」という値を代入
console.log(message); //変数名を使うことで、変数の中の値を使うことができる
message = "Good night world"; //変数の値は書き換えることができる
console.log(message); //中身が変わるので、出力される値も変わる

let say = "Hello";
console.log(say);
say = "Goodbye";
console.log(say);

//条件分岐　問題１
const price = 1000;
const tax = 0.1;
console.log(price * tax);

//条件分岐　問題２
const scoreA = 80 + 90 + 60 + 85 + 100;
const scoreB = 40 + 30 + 50 + 25 + 60;

console.log(scoreA);
console.log(scoreB);

if (scoreA >= 300 && scoreB >= 300) {
  console.log("素晴らしい");
} else if (scoreA >= 300 || scoreB >= 300) {
  console.log("普通");
} else if (scoreA < 300 && scoreB < 300) {
  console.log("頑張ろう");
}