let input1 = 'Titanic';
let input2 = 'Avenger Endgame';

function convertText(input) {
  let output = ''; 

  for (let char of input) {
    output += mapCharToNumber(char);
  }
  return output; 
}

function mapCharToNumber(char) {
  if (char === ' ') return '0'; 

  if (char === 'A') return '0';
  if ('BCD'.includes(char)) return '1';
  if (char === 'E') return '2';
  if ('FGH'.includes(char)) return '3';
  if (char === 'I') return '4';
  if ('JKLMN'.includes(char)) return '5';
  if (char === 'O') return '6';
  if ('PTQRST'.includes(char)) return '7';
  if (char === 'U') return '8';
  if ('VWXYZ'.includes(char)) return '9';

  if (char === 'a') return '9';
  if ('bcd'.includes(char)) return '8';
  if (char === 'e') return '7';
  if ('fgh'.includes(char)) return '6';
  if (char === 'i') return '5';
  if ('jklmn'.includes(char)) return '4';
  if (char === 'o') return '3';
  if ('pqrst'.includes(char)) return '2';
  if (char === 'u') return '1';
  if ('vwxyz'.includes(char)) return '0';

  return '';
}

let hasil1 = convertText(input1);
let hasil2 = convertText(input2);

console.log('');
console.log('No.1');
console.log('Mengubah  kalimat  menjadi sebuah bilangan berdasarkan kamus yang telah diberikan di soal');

console.log('Kalimat: ', input1);
console.log('Kalimat: ', input2);
console.log('Hasil Konversi Input 1: ', hasil1);
console.log('Hasil Konversi Input 2: ', hasil2);

function jumlahKurangBergantian(hasil) {
  let total = parseInt(hasil[0]) 
  let operasi = hasil[0];

  for (let i = 1; i < hasil.length; i++) {
    let angka = parseInt(hasil[i]); 
    if (i % 2 === 1) {
      total += angka;
      operasi += ' + '+angka;
    } else {
      total -= angka;
      operasi += ' - '+ angka;
    }
  }
  
  operasi += ' = ' + total; 
  console.log(operasi); 

  return total; 
}

console.log('');
console.log('No.2');
console.log('Mengubah, jumlah, dan kurangkan secara bergantian dari hasil konversi nomor 1');
console.log('Hasil Konversi nomor 1 inputan 1: ', hasil1);
console.log('Hasil Konversi nomor 1 inputan 2: ', hasil2);
console.log('Jumlah kurang secara bergantian');
let total1 = jumlahKurangBergantian(hasil1);
let total2 = jumlahKurangBergantian(hasil2);

let inputNumToChar1 = Math.abs(total1)
let inputNumToChar2 = Math.abs(total2) 

console.log('');
console.log('No.3');
console.log('Mengonversi dari number ke char');
console.log('Hasil nomor 2 inputan 1: ', inputNumToChar1);
console.log('Hasil nomor 2 inputan 2: ', inputNumToChar2);
function mappNumberToChars(number) {
  let num = number; 
  if (num === 0) return 'A';
  if (num === 1) return 'B';
  if (num === 2) return 'E';
  if (num === 3) return 'F';
  if (num === 4) return 'I';
  if (num === 5) return 'J';
  if (num === 6) return 'O';
  if (num === 7) return 'P';
  if (num === 8) return 'U';
  if (num === 9) return 'V';
  return ''; 
}

function generateExplanation(number) {
  let sum = 0;
  let explanation = '';
  let i = 0;
  while (sum < number) {
    let current = i % 10;
    if (sum + current <= number) {
      sum += current;
      explanation += current; 
    } else {
      i = -1;
    }
    i++; 
  }
  return explanation;
}

function convertNumberToChars(inputNumToChar) {
  let output = ''; 
  let digits = inputNumToChar;
  for (let num of digits) {
    output += mappNumberToChars(parseInt(num)) + ' ';
  }
  return output.trim();
}

let explanation1 = generateExplanation(inputNumToChar1);
let explanation2 = generateExplanation(inputNumToChar2);
  
// Contoh penggunaan
let numToChar1 = convertNumberToChars(explanation1);
let numToChar2 = convertNumberToChars(explanation2);

console.log('Hasil Konversi Input 1: ', numToChar1);
console.log('Hasil Konversi Input 2: ', numToChar2);

console.log('');
console.log('No.4');
console.log('melakukan konversi dari hasil nomor 3');

let hasilEmpatKe1 = convertText(numToChar1)
let hasilEmpatKe2 = convertText(numToChar2)


function convertText(input) {
  let output = ''; 

  for (let char of input) {
    output += mapCharToNumber(char);
  }
  return output; 
}

console.log('Mengubah hasil; nomor 3 menjadi sebuah bilangan');
console.log('Hasil nomor 3 imputan 1: ', hasilEmpatKe1);
console.log('Hasil nomor 3 imputan 2: ', hasilEmpatKe2);

function jumlahTerus(hasil) {
  let total = parseInt(hasil[0]) 
  let operasi = hasil[0];

  for (let i = 1; i < hasil.length; i++) {
    let angka = parseInt(hasil[i]); 
      total += angka;
      operasi += ' + '+angka;

  }
  
  operasi += ' = ' + total; 
  console.log(operasi); 

  return total; 
}


console.log('melakukan operasi matematika terhadap bilangan');
let inputNoEmpat1 = jumlahTerus(hasilEmpatKe1);
let inputNoEmpat2 = jumlahTerus(hasilEmpatKe2);

let inputNumToCharEmpat1 = Math.abs(total1)
let inputNumToCharEmpat2 = Math.abs(total2) 

let explanationEmpat1 = generateExplanation(inputNumToCharEmpat1);
let explenationEmpat2 = generateExplanation(inputNumToCharEmpat2);

console.log('melakukan operasi matematika terhadap bilangan');
let numToCharEmpatKe1 = convertNumberToChars(explanationEmpat1);
let numToCharEmpatKe2 = convertNumberToChars( explenationEmpat2);

console.log('Melakukan perubahan kembali ke bentuk abjad');
console.log('Hasil Konversi Inputan 1: ', numToCharEmpatKe1);
console.log('Hasil Konversi Inputan 2: ', numToCharEmpatKe2);

function ubahTerus(huruf, hurufPengurang) {
  let kodeASCII = huruf.charCodeAt(0); 
  let kodePengurang = hurufPengurang.charCodeAt(0);

  let kodeBaru = kodeASCII - kodePengurang + 0 + 65;

  return String.fromCharCode(kodeBaru);
}

console.log('');
console.log('No.5');
console.log('Melakukan operasi matematika terhadap huruf tersebut hingga menjadi huruf baru');
let kurangNoLimaKe1 = ubahTerus('F',numToCharEmpatKe1);
let kurangNoLimaKe2 = ubahTerus('Z',numToCharEmpatKe2);

console.log(kurangNoLimaKe1); 
console.log(kurangNoLimaKe2);

console.log('Melakukan perubahan kembali ke bentuk bilangan');
let konvertNoLimaKe1 = convertText(kurangNoLimaKe1)
let konvertNoLimaKe2 = convertText(kurangNoLimaKe2)

console.log(konvertNoLimaKe1); 
console.log(konvertNoLimaKe2);



