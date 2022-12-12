//se crea funcion para escuchar el documento y guardar los elementos
window.addEventListener("load", ()=>{
    const display = document.querySelector(".calculadora-display");
    const b = document.getElementsByClassName("botones");
//se convierte la coleccion de elementos a array    
    const arrayDeBotones = Array.from(b);
    arrayDeBotones.forEach( (button) => {
        button.addEventListener("click", ()=>{
            calcular(button,display);
        });
    });
});
//se crea funcion para calcular
function calcular(button,display){
    switch(button.innerHTML){
        case "C":
            borrar(display);
            break;
        case "=":
            hacerCalculo(display);
            break;
        default:
            limpiar(display,button);    
            break;
    }
}
//utilizamos el eval para evaluar todo string y retornar un valor
function hacerCalculo(display){
    display.innerHTML = eval(display.innerHTML)
}
function limpiar(display,button){
    if(display.innerHTML == 0){
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}
function borrar(display){
    display.innerHTML = 0;
}

