// membuat kuis matematika sederhana
// dibuat oleh arya dewangga p -(aryadev127)

const prompt = require("prompt-sync")();

// objek dalam jumpah menang dan kalah
const obj = {
  benar: 0,
  salah: 0,
  skor: 0
}

// function pilih level
function level(levl) {
  switch(levl) {
    case 1:
      return 10;
    break;
    case 2:
      return 100;
    break;
    case 3:
      return 1000;
    break;
    default:
      console.info("gak ada level pilih ulang")
    level();
  }
}
const sLevel = Number(prompt("pilih level(1/2/3) : "));

// fungsi utama
// jika kuis terjawab 5 maka akan berhenti
let index = 0;
function kuis(){
  let ranA = Math.floor(Math.random() * level(sLevel));
  let ranB = Math.floor(Math.random() * level(sLevel));
  let op = aritMath();
  let hasil = eval(`${ranA} ${op} ${ranB}`);
  let jawaban = Number(prompt(`hasil dari : ${ranA} ${op} ${ranB} = `));
  isTrue(hasil, jawaban);
  
  if(index >= 5) {
    index = 0;
    let reset = prompt("ulangi(1/0): ");
    ulang(reset);
  }
  else {
    let reset = "1";
    ulang(reset);
  }
}

// menentukan operator aritmatik dalam kuis
function aritMath() {
  let arr = ["+","*","/","-"]
  let ran = Math.floor(Math.random() * arr.length);
  return arr[ran];
}


// mengetaui jawaban bemar atau tidak
function isTrue(value, answer) {
  if(value == answer) {
    console.info("is true bro jawaban lu bener");
    obj.benar++;
  }
  else {
    console.info(`false bro jawabanya ${value}`);
    obj.salah++;
  }
  index++;
}


// mengulangi kuis;
function ulang(value) {
  let skor = Math.floor(100 / (obj.benar * obj.salah));
  obj.skor = skor;
  switch(value) {
    case "1":
      kuis();
    break;
    case "0":
      console.table(obj);
      return;
    break;
    default:
      console.info("itu tidak ada dan kami anggap selesai");
      console.table(obj)
  }
}


kuis();