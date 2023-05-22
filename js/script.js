let elementosLi = document.querySelectorAll(".container-img li");
let modelEl = document.querySelector("#modal");
let index = 0;

function show(increase){
    index = index + increase;
    index = Math.min(Math.max(index, 0), elementosLi.length - 1);
    elementosLi[index].scrollIntoView({ behavior: 'smooth' });
}