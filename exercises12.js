//1. Solve Problems menggunakan JavaScript Konversi Menit()

  console.log("1. Solve Problems menggunakan JavaScript Konversi Menit()");

  function konversiMenit(menit) {

    var jam = menit/60;
    var word= jam.toString();
    var firstWord = word.substring(0,1);
    var menit = menit%60;
    var word2= menit.toString();
    var secondWord = word2.substring(0,2);
    if (secondWord.length<2){
              secondWord= "0"+secondWord;
        }
    else {
        secondWord=secondWord;
    }

    var jamdinding =firstWord + ":"+secondWord;

    return jamdinding;
  }

  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
