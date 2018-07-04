//1. Melakukan Looping Menggunakan While

var counter = 2;
console.log("LOOPING PERTAMA");
while(counter <= 20) {
  console.log( counter +" - I love coding");
  counter +=2;
}

var counter = 20;
console.log("LOOPING KEDUA");
while(counter >= 2) {
  console.log( counter +" - I will become fullstack developer");
  counter -=2;
}

//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for (var i = 1; i <=20 ; i++) {
  console.log( i +" - I love coding");
}
console.log("LOOPING KEDUA");
for (var i = 20; i >= 1 ; i--) {
  console.log( i +" - I love coding");
}
//3. Angka Ganjil dan Genap
      console.log("ANGKA GANJIL GENAP");
      for (var i = 1; i <=100 ; i++) {
          if ((i%2)=== 0){
            console.log( i+". Genap");
          }
          else {
            console.log( i+". Ganjil");
          }
        }
      console.log("KELIPATAN 3");
        for (var i = 1; i <=100 ; i+=2) {
            if ((i%3)=== 0){
              console.log( i+" Kelipatan 3");
            }
          }
        console.log("KELIPATAN 6");
        for (var i = 1; i <=100 ; i+=5) {
            if ((i%6)=== 0){
              console.log( i+" Kelipatan 6");
            }
          }
        console.log("KELIPATAN 10");
        for (var i = 1; i <=100 ; i+=9) {
            if ((i%10)=== 0){
              console.log( i+" Kelipatan 10");
            }

          }
