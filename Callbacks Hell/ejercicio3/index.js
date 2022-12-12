let btn=document.getElementById("btn");

let div=document.querySelector(".div");
let color=document.querySelector(".color");
let borde=document.querySelector(".borde");
let time=document.querySelector(".time");
let contenedor=document.querySelector(".box");

function mostrarObjeto(time, numberDiv){
    setTimeout(function(){
        agregarDiv(numberDiv);
    }, time)
}
btn.addEventListener("click", ()=>{
    let llamarTime=time.value;
    let llamarDiv=div.value;
    mostrarObjeto(llamarTime, llamarDiv);
});
function crearDiv() {
    let addColor=color.value;
    let AddBorde=borde.value;
    let objetos=document.createElement("div");
    objetos.classList.add("set");
    objetos.style.setProperty("--background-color",addColor);
    objetos.style.setProperty("--border-radius",AddBorde+"px");
    contenedor.appendChild(objetos);
}
function agregarDiv(o) {
    for(let i=0; i<o; i++){
        crearDiv();
    }
}
