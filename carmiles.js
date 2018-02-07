function isInteresting(number, awesomePhrases) {
  let num1 = number + 1;
  let num2 = number +2;
  if ((number == 98) || (number == 99)) {
    return 1;
  } else if (number < 98){
    return 0;
  }
  if (allSame(number.toString().split(""))){
    return 2;
  } else if ((allSame((num1).toString().split("")))||(allSame((num2).toString().split("")))){
      return 1;
    }
  if (number.toString().slice(1).split("").every(zeros)){
    return 2;
  } else if ((num1).toString().slice(1).split("").every(zeros) ||
    (num2).toString().slice(1).split("").every(zeros)) {
      return 1;
  }
  if (consec(number.toString().split(""))){
    return 2;
  } else if ((consec(num1.toString().split(""))) || (consec(num2.toString().split("")))){
    return 1;
  }
  if (palindrome(number)) {
    return 2;
  } else if ((palindrome(num1)) || (palindrome(num2))){
    return 1;
  }
  if (awesomePhrases.indexOf(number) != -1) {
    return 2;
  } else if ((awesomePhrases.indexOf(num1) != -1) ||    (awesomePhrases.indexOf(num2) != -1)){
    return 1;
  }
  return 0;
}

function zeros (e, i, n) {
  return e == 0;
}

function consec (n) {
  let fwd = true, rev = true;
  for (let x = 0; x < n.length; x++){
    n[x] = parseInt(n[x]);
  }
  let curr = n[n.length -2], last = n[n.length - 1];
  for (let i = 0; i < n.length -2; i++){
    if ((n[i] + 1) != n[i + 1]){
      fwd = false;
    }
    if ((n[i] - 1) != n[i + 1]){
      rev = false;
    }
  }
  if (fwd) {
    if ((curr + 1 == last) || ((curr == 9) && (last == 0))){
      return true;
    }
  }
  if (rev) {
    if ((curr - 1 == last) || ((curr == 1) && (last == 0))) {
      return true;
    }
  }
}

function allSame (n) {
  let same = true;
  for (let i = 0; i < n.length - 1; i++){
    if (n[i] != n[i+1]){
      same = false;
    }
  }
  return same;
}

function palindrome(n) {
  if (n.toString() == n.toString().split("").reverse().join("")) {
    return true
  }
  return false;
}
