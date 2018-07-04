var nama =`Sulistio`;
var peran=`Penyihir`;

if (nama==""){
  console.log("Nama harus diisi!");
}
else{
  if(peran==""){
    console.log("Halo,"+nama ,"Pilih peranmu untuk memulai game!");
  }
  else {
    if(peran=="Ksatria"){
      if(nama==""){
        console.log("Nama harus diisi!");
      }
      else {
        console.log("Selamat datang di Dunia Proxytia,"+nama);
        console.log("Hallo Ksatria "+nama,",kamu dapat menyerang dengan senjatamu!!");
      }

    }
    else{
      if(peran=="Tabib"){
        if(nama==""){
          console.log("Nama harus diisi!!");
        }
        else {
          console.log("Selamat datang di Dunia Proxytia,"+nama);
          console.log("Hallo Tabib "+nama ,",kamu akan membantu temanmu yang terluka.");
        }

      }
      else {
        if(peran=="Penyihir"){
          if(nama==""){
            console.log("Nama harus diisi!");
          }
          else {
            console.log("Selamat datang di Dunia Proxytia,"+nama);
            console.log("Hallo Penyihir "+nama,",ciptakan keajaiban yang membantu kemenanganmu!");
          }

        }
        else {
          console.log("Maff, "+nama,"Peran," +peran,"yang kamu pilih belum ada !!");
        }
      }
    }
  }
}
