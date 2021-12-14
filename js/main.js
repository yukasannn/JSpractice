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

//繰り返し　問題
const test = ["国語", "数学", "英語"];
test.push("理科");
test.push("社会");
console.log(test);
//
for (let i = 1; i<= 50; i++){
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i & 5 == 0) {
    console.log("Buzz");
  } else {
    console.log (i)
  }
}

