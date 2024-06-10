function calcular(operacion, numUno, numDos) {
    if (operacion == "suma" ) {
        return numUno + numDos;
    } else if(operacion == "resta"){
        return numUno - numDos;
    }
    else if(operacion == "multiplicacion"){
        return numUno * numDos;
    }
    else if(operacion == "division"){
        return numUno / numDos;
    } 
    else {
     return "Esto no es una operacion";
    }

}


console.log(calcular("felipe", 12, 34));