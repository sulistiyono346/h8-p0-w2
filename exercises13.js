//1. Solve Problems menggunakan JavaScript Logic Challenge - X dan O()

  console.log("1. Solve Problems menggunakan JavaScript Logic Challenge - X dan O()");

   function xo(str) {

  var dataO = 0;
  var dataX = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      dataO = dataO + 1;
    }
    else if (str[i] === 'o') {
      dataX = dataX + 1;
    }
    else {
      return 'XXXXX';
    }
  }

  if (dataO === dataX) {
    return true;
  } else {
    return false;
  }
}
