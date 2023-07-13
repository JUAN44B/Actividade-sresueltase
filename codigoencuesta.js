var personas = [];

function agregarPersona() {
  var nombre = document.getElementById("nombre").value;
  var edad = parseInt(document.getElementById("edad").value);
  var sueno = parseInt(document.getElementById("horasSueno").value);
  var trabajo = parseInt(document.getElementById("horasTrabajo").value);
  var ocio = parseInt(document.getElementById("horasOcio").value);
  var otras = parseInt(document.getElementById("horasOtrasActividades").value);

  var persona = {
    nombre: nombre,
    edad: edad,
    sueno: sueno,
    trabajo: trabajo,
    ocio: ocio,
    otras: otras
  };

  personas.push(persona);

  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("horasSueno").value = "";
  document.getElementById("horasTrabajo").value = "";
  document.getElementById("horasOcio").value = "";
  document.getElementById("horasOtrasActividades").value = "";

  alert("Persona " + nombre + " agregada a la encuesta");
}

function finalizar() {
  var totalPersonas = personas.length;
  var sumaSueno = personas.reduce(function(total, persona) {
    return total + persona.sueno;
  }, 0);
  var sumaTrabajo = personas.reduce(function(total, persona) {
    return total + persona.trabajo;
  }, 0);
  var sumaOcio = personas.reduce(function(total, persona) {
    return total + persona.ocio;
  }, 0);
  var sumaOtras = personas.reduce(function(total, persona) {
    return total + persona.otras;
  }, 0);

  var totalHoras = sumaSueno + sumaTrabajo + sumaOcio + sumaOtras;

  var porcentajeSueno = (sumaSueno / totalHoras) * 100;
  var porcentajeTrabajo = (sumaTrabajo / totalHoras) * 100;
  var porcentajeOcio = (sumaOcio / totalHoras) * 100;
  var porcentajeOtras = (sumaOtras / totalHoras) * 100;

  var totalPorcentaje = porcentajeSueno + porcentajeTrabajo + porcentajeOcio + porcentajeOtras;

  var distribucion = {
    sueno: porcentajeSueno,
    trabajo: porcentajeTrabajo,
    ocio: porcentajeOcio,
    otras: porcentajeOtras
  };

  var edades = personas.map(function(persona) {
    return persona.edad;
  });
  var edadRepetida = calcularModa(edades);

  mostrarResultados(distribucion, totalPorcentaje, edadRepetida);
}

function mostrarResultados(distribucion, totalPorcentaje, edadRepetida) {
  var resultados = document.getElementById("resultados");

  resultados.innerHTML = "";

  var li1 = document.createElement("li");
  li1.innerHTML = "Porcentaje de horas de sueño: " + distribucion.sueno.toFixed(2) + "%";
  resultados.appendChild(li1);

  var li2 = document.createElement("li");
  li2.innerHTML = "Porcentaje de horas de trabajo: " + distribucion.trabajo.toFixed(2) + "%";
  resultados.appendChild(li2);

  var li3 = document.createElement("li");
  li3.innerHTML = "Porcentaje de horas de ocio: " + distribucion.ocio.toFixed(2) + "%";
  resultados.appendChild(li3);

  var li4 = document.createElement("li");
  li4.innerHTML = "Porcentaje de horas dedicadas a otras actividades: " + distribucion.otras.toFixed(2) + "%";
  resultados.appendChild(li4);

  var li5 = document.createElement("li");
  li5.innerHTML = "Total porcentaje: " + totalPorcentaje.toFixed(2) + "%";
  resultados.appendChild(li5);

  var li6 = document.createElement("li");
  li6.innerHTML = "Edad más repetida: " + edadRepetida;
  resultados.appendChild(li6);
}

function calcularModa(arr) {
  var counts = {};
  var maxCount = 0;
  var moda = null;

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      moda = num;
    }
  }

  return moda;
}

