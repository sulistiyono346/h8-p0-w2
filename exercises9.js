//1. Tugas 1 fungsi bernama shoutOut()

  console.log("1. Tugas 1 fungsi bernama shoutOut()");

    function shoutOut() {
      console.log("Halo Function!");
    }
    shoutOut();

//2. Tugas 2 fungsi bernama calculateMultiply()

  console.log("2. Tugas 2 fungsi bernama calculateMultiply()");

     function calculateMultiply(num1,num2){
        return num1*num2
      }
      var num1 = 5;
      var num2 = 6;
      var hasilPerkalian = calculateMultiply(num1,num2);
      console.log(hasilPerkalian);

//3. Tugas 3 fungsi bernama processSentence()

  console.log("3. Tugas 3 fungsi bernama processSentence()");

    function processSentence(name,age,address,hobby){

      return ("Nama saya "+name+",umur saya " +age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby);
    
    }
    var name = "Agus ";
    var age =30;
    var address = "Jln. Malioboro, Yogjakarta";
    var hobby ="gaming";

    var fullSentence = processSentence(name,age,address,hobby);
    console.log(fullSentence);
