let m = 30;
let s = 0;

const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

setInterval(() => {

minEl.innerText = String(m).padStart(2,'0');
secEl.innerText = String(s).padStart(2,'0');

if(s === 0){
if(m === 0) return;
m--;
s = 59;
}else{
s--;
}

},1000);