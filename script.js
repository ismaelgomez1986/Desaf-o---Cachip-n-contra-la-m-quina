//Se crea la variable i para postreiormente ser usada en el ciclo for
let i;
//Se crea la variable userJugada, que almacenará, dentro de cada etapa del ciclo for, la elección del usuario (piedra, papel o tijera) 
let userJugada;
//Se crea la variable contWinUser y contWinMaq, que aumentarán en 1 cada vez que el usuario gane/máquina gane, respectivamente 
let contWinUser = 0;
let contWinMaq = 0;

//Se crea la varaiable numJugadas, que almacenará el valor correspondiente a la cantidad de veces que se jugará al CACHIPÚN  
let numJugadas = parseInt(prompt("Bienvenido! Ingrese la cantidad de veces que desea jugar CACHIPÚN contra la máquina:"));

//Se establece validaciones, si el valor ingresado por el usuario en numJugadas NO es un número, se mostrará una alerta
if (Number.isNaN(numJugadas)) {
    alert("El valor ingresado no es un número, por favor recargue la página y vuelva a intentarlo.")
    //Si la cantidad ingresada pro el usuario es menor a 1, o mayor a 20, aparecerá otra alerta
} else if (numJugadas > 20 || numJugadas < 1) {
    alert("Por favor intenta con un número mayor a 0 e inferior a 20.")
    //Si todo sale bien, en la opción "else", comienza el ciclo por la cantidad de veces ingresadas por el usuario
} else {
    for (i = 0; i < numJugadas; i++) {
        //Se establece, en cada ciclo, un nuevo valor aleatorio entre 0 y 2, al valor seleccionado se le suma 1 (para que los posibles valores sean 1, 2 y 3 en vez de 0, 1 y 2)
        let maqJugada = Math.floor((Math.random() * 3) + 1)
        console.log(maqJugada + "\n")
        /* math.random() * 3 + 1 =
        estas son equivalencias que no es necesario que conozca el usuario, sino más bien para el cálculo de ganar, perder o empatar
        piedra = 1,
        papel = 2,
        tijera = 3,
        */
        //En cada ciclo se pregunta al usuario que escoja un número entre 1 y 3 (piedra = 1, papel = 2, tijera = 3,)
        let userJugada = parseInt(prompt("Escoja un número del 1 al 3:\n 1 = Piedra\n 2 = Papel\n 3 = Tijera"))

        //Se establece nuevamente validaciones similares a la línea 13, 14, 16 y 17 (revisar comentarios en línea 12 y 15)
        if (Number.isNaN(userJugada)) {
            alert("Por favor escoja un número del 1 al 3, El valor escogido no es un número")
        } else if (userJugada > 3 || userJugada < 1) {
            alert("Por favor escoja un número del 1 al 3, Ud. escogió " + userJugada)
        } else {
            //En cada ciclo, si los números coinciden (1 = 1 -> piedra = piedra), la alerta mencionará un empate
            if (maqJugada === userJugada) {
                alert("La máquina escogió lo mismo, es un empate! :/\nUsuario: " + contWinUser + ",\nMáquina: " + contWinMaq)
            } else {
                //Se toma para cada caso del switch, el valor aleatorio de la máquina
                switch (maqJugada) {
                    case 1:
                        //Se compara la jugada de la máquina (case 1 es piedra paar la máquina) con el caso 2 (papel para el usuario)
                        if (userJugada == 2) {
                            //Como el usuario gana, aumenta en uno el contador del usuario 
                            contWinUser++;
                            //Se genera una alerta en donde se menciona que el usuario gana, y se muestra el valor de ambos contadores (maquina y usuario, a través de sus variables)
                            alert("La máquina escogió Piedra, GANASTE ESTA VEZ!!!\nUsuario: " + contWinUser + ",\nMáquina: " + contWinMaq);
                            //Si la jugada del usuario es 3 (tijera), entonces la máquina gana (aún estamos en el caso 1, en donde el valor de la máquina sería piedra)
                        } else if (userJugada == 3) {
                            //Como la máquina gana, aumenta su contador en 1
                            contWinMaq++;
                            //Se muestra la alerta en donde la máquina gana, adem´s de mostrar los contadores actualizados
                            alert("La máquina escogió Piedra, perdiste esta vez :(\nUsuario: " + contWinUser + ",\nMáquina: " + contWinMaq);
                        }
                        //Si se genera el caso 1, termina el ciclo gracias a la palabra "break"
                        break;
                    case 2:
                        //Muy similar al caso 1, si la maquina tiene como valor 2 (papel), se compara con la jugada en caso de que usuario seleccione 3 (tijera)
                        if (userJugada == 3) {
                            //Tijera gana a papel y el usuario gana, aumentando su contador a 1
                            contWinUser++;
                            //Se genera una alerta en donde se menciona que el usuario gana, y se muestra el valor de ambos contadores (maquina y usuario, a través de sus variables)
                            alert("La máquina escogió Papel, GANASTE ESTA VEZ!!!\nUsuario: " + contWinUser + ",\nMáquina: " + contWinMaq);
                        } else if (userJugada == 1) {
                            //Si la opción seleccionada por el usuario es 1 (piedra), entonces la máquina gana (case 2: papel), y aumenta el contador de la máquina en 1
                            contWinMaq++;
                            //Se muestra la alerta respectiva del ganador en este caso, más el contador de cada uno actualizado
                            alert("La máquina escogió Papel, perdiste esta vez :(\nUsuario: " + contWinUser + ",\nMáquina: " + contWinMaq);
                        }
                        //Si éste es el cao que se cumple, finaliza este ciclo gracias a este "break"
                        break;
                        //Si la jugada aleatoria de la máquina es 3 (tijera): 
                    case 3:
                        //Se compara con la jugada del usuario (1: piedra), en donde gana el usuario, aumentando su contador en 1 
                        if (userJugada == 1) {
                            contWinUser++;
                            //Se muestra la alerta con el ganador de este caso y los contadores actualizados
                            alert("La máquina escogió Tijera, GANASTE ESTA VEZ!!!\nUsuario: " + contWinUser + ",\nMáquina: " + contWinMaq);
                            //Si la jugada es 2(papel), el usuario pierde, y aumenta el contador de la máquina
                        } else if (userJugada == 2) {
                            contWinMaq++;
                            //Se muestra la alerta respectiva del ganador en este caso, más el contador de cada uno actualizado
                            alert("La máquina escogió Tijera, perdiste esta vez :(\nUsuario: " + contWinUser + ",\nMáquina: " + contWinMaq);
                        }
                        //Si éste es el cao que se cumple, finaliza este ciclo gracias a este "break"
                        break;
                }
            }
        }
    }
    //Todos estos casos se pueden repetir las veces necesarias, según la cantidad de veces ingresadas por el usuario, para cada ciclo los contadores van acumulándose
}
//Una vez finalizado el ciclo se comparan los acumuladores del usuario y de la máquina, para ver si es que empataron, ganó el usuario o la máquina
//Si las veces que ganó el usuario es igual a las veces que ganó la máquina, y ambos son mayores a cero, es finalmente un empate 
if (contWinMaq == contWinUser && contWinMaq > 0 && contWinUser > 0) {
    //Se muestra la alerta con el resultado final, si es que se cumple esta condición
    alert("Y el resultado final es: EMPATE :/\nÁnimo, al menos no perdiste :)")
    //Si el usuario ganó más veces que la máquina, se muestra en la alerta que ganó el usuario
} else if (contWinUser > contWinMaq) {
    alert("Y el resultado final es: GANASTE!!!")
    //Si la máquina ganó más veces que el usuario, se muestra en la alerta que el usuario perdió
} else if (contWinUser < contWinMaq) {
    alert("Y el resultado final es: Perdiste :(")
//Si las veces que ganó el usuario es igual a las veces que ganó la máquina, y ambos son iguales a cero, se muestra "GAME OVER", este caso se puede generar, si todas las veces que el usuario quiere jugar, escoge un valor distinto de 1, 2 y 3, o bien todas las veces que escogió el usuario, terminó en empate, por lo tanto ninguno de los contadores de ganadas aumentó.  
} else if(contWinMaq == contWinUser && contWinMaq == 0 && contWinUser == 0) {
    alert("GAME OVER, recarga la página para intentarlo nuevamente")
}