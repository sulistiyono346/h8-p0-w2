//1. Solve Problems menggunakan JavaScript balik Kata()

  console.log("1. Solve Problems menggunakan JavaScript balik Kata()");

    function balikKata(kata) {

    //  return kata.split('').reverse().join('');

      var pisah = kata.split("");
      var balik = pisah.reverse();
      var gabung = balik.join("");


      return gabung;
    }


    console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
    console.log(balikKata('John Doe')); // eoD nhoJ
    console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
    console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
    console.log(balikKata('Super')); // repuS
