// membuat kuis matematika sederhana

const prompt = require("prompt-sync")();

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
const lev = level(sLevel);

// fungsi utama
function kuis(){
  let ranA = Math.floor(Math.random() * lev);
  let ranB = Math.floor(Math.random() * lev);
  let op = aritMath();
  let hasil = eval(`${ranA} ${op} ${ranB}`);
  let jawaban = Number(prompt(`hasil dari : ${ranA} ${op} ${ranB} = `));
  isTrue(hasil, jawaban);
  
  let reset = prompt("ulangi(1/0): ");
  ulang(reset);
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
    console.info("is true");
  }
  else {
    console.info("false bro");
  }
}


// mengulangi kuis;
function ulang(value) {
  switch(value) {
    case "1":
      kuis();
    break;
    case "0":
      return;
    break;
    default:
      console.info("itu tidak ada dan kami anggap selesai");
  }
}
kuis();