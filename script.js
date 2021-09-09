const nombre_del_alumno = document.getElementById("nombre") 
const notas_a_promediar = document.getElementById("notasAPromediar") 

//funcion que calcula el promedio
const calcularPromedio = () => {
    //Crea variable GRADES y la iguala al atributo notas_a_promediar.value, y luego busca el argumento (",")
    //para crear un array con cada valor separado por el argumento.
    const grades = notas_a_promediar.value.split(",") 
    //inicializar la variable PROMEDIO en 0.
    let promedio = 0
    //crear un ciclo for para cada NOTA dentro del array GRADES
    for (nota in grades) {
       //Se eliminan los Whitespaces de cada NOTA en GRADES utilizando el Metodo TRIM()
       //Se convierte cada NOTA a Number
       //Se iguala PROMEDIO a la suma de si misma y a la NOTA convertida y trimeada.
        promedio += Number(grades[nota].trim())
    }
    // se iguala PROMEDIO a si misma DIVIDIDA por la LONGITUD del array GRADES
    promedio = promedio / grades.length
    console.log(promedio)
    //Se muestra el promedio final del alumno.
    document.getElementById("promedioFinal").innerHTML = "El <strong>promedio final</strong> de " + nombre_del_alumno.value + " es " + promedio  
}


const boton = document.getElementById("button")
const detectarEnter = (tecla) => {
    if (tecla.key == "Enter") {
        boton.click()
    }
}
document.addEventListener('keypress', detectarEnter);

