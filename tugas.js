Tugas Senin W2


Soal No 1 Newton Second Law
================================================================================

1. ALGORITMA

  1. Simpan "Massa" dengan nilai berapapun;
  2. Simpan "Percepatan" dengan nilai berapapun;
  3. Simpan "Resultan" dengan nilai berapapun;
  4. Hitung hasil perkalian anatara "Massa" dengan "Percepatan";
  5. Setelah ,mendapatkan hasil perhitungan, isikan hasilnya ke dalam " Resultan";
  6. Tampilkan Resultan;

2. PSEUDOCODE

  STORE "Massa" with any value
  STORE "Percepatan" with any value
  STORE " Resultan" with any value

  CALCULATE "Massa" times "Percepatan"
  SET "Resultan" value with calculate result

  DISPLAY "Resultan"




Soal No 2  Tahun Kabisat
================================================================================

1. ALGORITMA

  1. Simpan angka tahun with any value;
  2. Jika angka tahun habis di bagi 4 dan
     tidak habis dibagi 100 merupakan tahun kabisat;
  3. Jika angka tahun habis di bagi 4 dan
     habis dibagi 100 dan habis dibagi 400 merupkan tahun kabisat;
  4. jika angka tahun habis di bagi 4 dan habis dibagi 100 dan
     tidak habis dibagi 400 bukan merupkan tahun kabisat;

2. PSEUDOCODE

STORE "tahun" with any value

if tahun MOD 4 equal to 0
  if tahun MOD 100 not equal to 0
  display  "Tahun Kabisat"
  else
      if tahun MOD 400 equal  to 0
      display  "Tahun Kabisat"
      else
      display "Bukan Tahun Kabisat"
      end if
  end if
else
display "Bukan Tahun Kabisat"
end if


Soal No 3  Laundry Day
================================================================================

1. ALGORITMA

1. Simpan TotalBaju = 20 ;
2. Simpan nilai  dimulai dari 0;
3. Lakukan Selama Counter kurang dari TotalBaju
    3.a Counter = Counter tambah 1;
    3.b Lanjut ke step 4;
4.Tampilkan "Mesin Nyala", berati Counter sudah sama dengan TotalBaju;



2. PSEUDOCODE

STORE `TotalBaju` with 20
STORE `Counter` = 0

while `Counter` LESS THAN  `TotalBaju`
  SET `counter` = `counter` +1

DISPLAY "MesinNyala"


Soal No 4  Periksa Kuku
================================================================================

1. ALGORITMA

  1. Simpan JumlahMurit = 41
  2. Simpan Murit = 1
  3. Simpan Kuku = `panjang`
  4. Lakukan selama Murit kurang dari JumlahMurit
     4.a. Jika kuku sama dengan panjang tampilkan "Hukum"
      Murit =Murit tambah 1
     4.b. Jika salah tampilkan "Pujian" Murit =Murit tambah 1

2. PSEUDOCODE

STORE `JumlahMurit` with 41
STORE `Murit` = 1
STORE `kuku`  = `panjang`
while `Murit` LESS THAN `JumlahMurit`
  if "kuku" EQUAL to "panjang"
  DISPLAY "Hukum"
  SET `Murit`=`Murit` +1
  else
  DISPLAY "Prestasi"
  SET `Murit`=`Murit` +1

END while
