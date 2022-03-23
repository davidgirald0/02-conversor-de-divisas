const moneda1 = document.getElementById("moneda1");
const moneda2 = document.getElementById("moneda2");
const resultado = document.getElementById("cantDinero");
const btn = document.getElementById("btnConv");
const contenedor = document.getElementById("contenedor");
let simIzq = document.getElementById("simbIzquierda");
let simDer = document.getElementById("simbDerecha");
let alerta = document.getElementById('alerta');
let mensAlerta = document.createElement('h3');

let moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

let dolar = 1;                  // dolar/dolar
let pesoMex = 20.27;            // pesos Mexicanos / dolar
let pesoCol = 3757.34;          // Pesos Colombianos / dolar
let euro = 0.91;                // Euros / dolar
let libEster = 0.76;            // Libra Esterlina / dolar
let cambio = 0;


function monDolar(mon2, dinero){
    if(mon2 == 2){                              // Dolar - Dolar
        cambio = dinero * dolar / dolar;
        simDer.textContent = " $";
    }else if(mon2 == 3){                        // Dolar - Peso Mexicano
        cambio = dinero * pesoMex / dolar;
        simDer.textContent = " $";
    }else if(mon2 == 4){                        // Dolar - Peso Colombiano
        cambio = dinero * pesoCol / dolar;
        simDer.textContent = " $";
    }else if(mon2 == 5){                        // Dolar - Euro
        cambio = dinero * euro / dolar;
        simIzq.textContent = "€ ";
    }else if(mon2 == 6){                        // Dolar - Libra Esterlina
        cambio = dinero * libEster / dolar;
        simIzq.textContent = "£ ";
    }
}
function monPesoMex(mon2, dinero){
    if(mon2 == 2){                              // Peso Mexicano - Dolar
        cambio = dinero * dolar / pesoMex;
        simDer.textContent = " $";
    }else if(mon2 == 3){                        // Peso Mexicano - Peso Mexicano
        cambio = dinero * pesoMex / pesoMex;
        simDer.textContent = " $";
    }else if(mon2 == 4){                        // Peso Mexicano - Peso Colombiano
        cambio = dinero * pesoCol / pesoMex;
        simDer.textContent = " $";
    }else if(mon2 == 5){                        // Peso Mexicano - Euro
        cambio = dinero * euro / pesoMex;
        simIzq.textContent = "€ ";
    }else if(mon2 == 6){                        // Peso Mexicano - Libra Esterlina
        cambio = dinero * libEster / pesoMex;
        simIzq.textContent = "£ ";
    }
}
function monPesoCol(mon2, dinero){
    if(mon2 == 2){                              // Peso Colombiano - Dolar
        cambio = dinero * dolar / pesoCol;
        simDer.textContent = " $";
    }else if(mon2 == 3){                        // Peso Colombiano - Peso Mexicano
        cambio = dinero * pesoMex / pesoCol;
        simDer.textContent = " $";
    }else if(mon2 == 4){                        // Peso Colombiano - Peso Colombiano
        cambio = dinero * pesoCol / pesoCol;
        simDer.textContent = " $";
    }else if(mon2 == 5){                        // Peso Colombiano - Libra Esterlina
        cambio = dinero * euro / pesoCol;
        simIzq.textContent = "€ ";
    }else if(mon2 == 6){                        // Peso Colombiano - Libra Esterlina
        cambio = dinero * libEster / pesoCol;
        simIzq.textContent = "£ ";
    }
}
function monEuro(mon2, dinero){
    if(mon2 == 2){                              // Euro - Dolar
        cambio = dinero * dolar / euro;
        simDer.textContent = " $";
    }else if(mon2 == 3){                        // Euro - Peso Mexicano
        cambio = dinero * pesoMex / euro;
        simDer.textContent = " $";
    }else if(mon2 ==4){                         // Euro - Peso Colombiano
        cambio = dinero * pesoCol / euro;
        simDer.textContent = " $";
    }else if(mon2 ==5){                         // Euro - Euro
        cambio = dinero * euro / euro;
        simIzq.textContent = "€ ";
    }else if(mon2 == 6){                        // Euro - Libra Esterlina
        cambio =dinero *libEster / euro;
        simIzq.textContent = "£ ";
    }
}
function monLibEster(mon2, dinero){
    if(mon2 == 2){                              // Libra Esterlina - Dolar
        cambio = dinero * dolar / libEster;
        simDer.textContent = " $";
    }else if(mon2 == 3){                        // Libra Esterlina - Peso Mexicano
        cambio = dinero * pesoMex / libEster;
        simDer.textContent = " $";
    }else if(mon2 ==4){                         // Libra Esterlina - Peso Colombiano
        cambio = dinero * pesoCol / libEster;
        simDer.textContent = " $";
    }else if(mon2 ==5){                         // Libra Esterlina - Euro
        cambio = dinero * euro / libEster;
        simIzq.textContent = "€ ";
    }else if(mon2 == 6){                        // Libra Esterlina - Libra Esterlina
        cambio = dinero * libEster / libEster;
        simIzq.textContent = "£ ";
    }
}

btn.addEventListener("click", () =>{
    alert(moneda1.value, moneda2.value, resultado.value);
    simDer.textContent = ""
    simIzq.textContent = ""
    if(moneda1.value == 2){
        monDolar(moneda2.value, resultado.value);
    }else if(moneda1.value == 3){
        monPesoMex(moneda2.value, resultado.value);
    }else if(moneda1.value == 4){
        monPesoCol(moneda2.value, resultado.value);
    }else if(moneda1.value == 5){
        monEuro(moneda2.value, resultado.value);
    }else if(moneda1.value == 6){
        monLibEster(moneda2.value, resultado.value);
    }

    console.log(`El cambio de moneda es: ${cambio}`);
    document.getElementById("cantDinero").value = cambio.toFixed(2);
})

resultado.addEventListener("click",()=>{
    resultado.value = "";
    alerta.setAttribute("style", "");
    mensAlerta.textContent = "";
})


function alert(mon1, mon2, parametro){

    if(isNaN(parametro) || mon1 == 1 || mon2 == 1){
        alerta.setAttribute("style", "color: white; background-color: rgba(255,99,71,0.6); width: 1000px; height: 30px; margin: auto; padding: 15px; border-radius: 5px;");
        mensAlerta.textContent = "Elija una cantidad valida y/o Seleccione la moneda para el cambio";
        alerta.appendChild(mensAlerta);
    }
}
