
let nombre = prompt("ingrese su nombre")


const no = document.querySelector(".salir");

no.addEventListener("click",(e)=>{
    const hola = (name) => {
        alert(`hola ${name}`);
      };
      hola(nombre)
});


