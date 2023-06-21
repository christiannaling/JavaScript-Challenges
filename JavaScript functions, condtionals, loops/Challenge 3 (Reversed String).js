function solution(str) {
    const arr = str.split('');
    const reversed = arr.reverse();
    const finalAnswer = reversed.join('');

    return finalAnswer;
}

// 1 line
function solution(str){
    return str.split('').reverse().join('');
  }