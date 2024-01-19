
const formulario = document.getElementById("formularioEnviar");
formulario.addEventListener('submit', defaultF)

function defaultF(e) {

  document.getElementById("loader-pagina-enviarForm").classList.remove("disabled");

}