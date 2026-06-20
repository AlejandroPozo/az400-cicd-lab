// ============================================================
// Laboratorio colaborativo de CI/CD
// Carga dinámica de las tarjetas de estudiantes con fetch
// ============================================================

// Lista de componentes en orden, desde student-01 hasta student-07.
var componentes = [
  "components/student-01.html",
  "components/student-02.html",
  "components/student-03.html",
  "components/student-04.html",
  "components/student-05.html",
  "components/student-06.html",
  "components/student-07.html"
];

// Contenedor donde se insertarán todas las tarjetas.
var contenedor = document.getElementById("student-grid");

// Cargamos cada componente respetando el orden de la lista.
function cargarComponentes() {
  componentes.forEach(function (rutaArchivo) {
    fetch(rutaArchivo)
      .then(function (respuesta) {
        // Si la respuesta no es correcta, lanzamos un error.
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar: " + rutaArchivo);
        }
        return respuesta.text();
      })
      .then(function (html) {
        // Insertamos el contenido de la tarjeta dentro del contenedor.
        contenedor.insertAdjacentHTML("beforeend", html);
      })
      .catch(function (error) {
        // Mostramos un mensaje claro si algún componente falla.
        mostrarError(rutaArchivo);
        console.error(error);
      });
  });
}

// Muestra un mensaje de error visible para el usuario.
function mostrarError(rutaArchivo) {
  var mensaje = document.createElement("p");
  mensaje.className = "error-message";
  mensaje.textContent =
    "Error: no se pudo cargar el componente " +
    rutaArchivo +
    ". Recuerda abrir el sitio con Live Server.";
  contenedor.appendChild(mensaje);
}

// Iniciamos la carga cuando el documento esté listo.
cargarComponentes();
