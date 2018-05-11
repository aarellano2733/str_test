const QuestionMarks = (str) => {
  for(i=0; i<str.length; i++){
    for(j=0; j<str.length; j++){
      if(Number(str[i]) + Number(str[j]) === 10){
        if(str.slice(i+1, j).split('?').length -1 ===3){
          return true;
        }
      }
    }
  }
  return false;
}

const test3 = "bb6?9"; //false
const test2 = "bcc?7??ccc?3tt1??????5"; //true
const test4 = "g??7??ccc??3tt1??????5"; //false
const test1 = "arrb6???4xxbl5???eee5"; //true

console.time();
QuestionMarks(test1); // true
console.timeEnd();
console.time();
QuestionMarks(test2) // true
console.timeEnd();
console.time();
QuestionMarks(test3); //false
console.timeEnd();
console.time();
QuestionMarks(test4); // true
console.timeEnd(); 

//Using ES6, have a func defined as QuestionMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly
//3 question marks between every pair of two numbers that add up to 10.
//If so, then your program should return the string ​true​, otherwise it should return the string ​false​.
//If there aren't any two numbers that add up to 10 in the string, then your program should return ​false​ as well.
//Ex: if str is "arrb6???4xxbl5???eee5" then your program should return ​true​ because there are exactly 3 question marks
//between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
//Winner will be chosen based not only on simplicity but on performance of the application. Make sure you’re using ​console.time()​ to show your timing.