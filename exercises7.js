//1. Row 1 Menyusun Barisan Bintang

  console.log("1. Row 1 Menyusun Barisan Bintang");

    var row1=5;
		for( i=0; i<row1; i++){
			console.log(" * ");
		}
//2. Menyusun Barisan Bintang Dengan Nested Looping

  console.log("2. Menyusun Barisan Bintang Dengan Nested Looping");

    var row2 = 5
    for ( var i = 1; i <= row2; i++ ){
    var x = ''
      for ( var j = 1; j<= row2; j++){
        x=x+' *'
        }
      console.log(x)
    }

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

  console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");

   var row3 = 5
   var x = ''
    for ( var i = 1; i<=row3; i++){
    x=x+' *'
      console.log(x)
    }
