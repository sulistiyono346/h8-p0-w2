//1. Solve Problems menggunakan JavaScript Logic Challenge - X dan O()

  console.log("1. Solve Problems menggunakan JavaScript Logic Challenge - X dan O()");

    function xo(str){

      var pisah1 = str.split('o');
      var pisah2 = str.split('x');

        if (pisah1.length === pisah2.length ) {
            return true;
        }
        else if (pisah1.length !== pisah2.length){
          return false;
        }

    }

    console.log(xo('xoxoxo')); // true
    console.log(xo('oxooxo')); // false
    console.log(xo('oxo')); // false
    console.log(xo('xxxooo')); // true
    console.log(xo('xoxooxxo')); // true
