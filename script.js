let container = document.querySelector(".container");
let  btn = document.getElementById("btn");

let number = Math.ceil(Math.random() * 1000);

let clocks = 0;

btn.onclick = function(){
    clocks += 1;
    if(clocks === 1 ){
        container.style.transform = `rotate(${number}deg)`;
        number+= Math.ceil(Math.random() * 1000);
    }
}