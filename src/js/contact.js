const envioBtn = document.getElementById("enviar");
envioBtn.addEventListener("click", enviarFormulario);

function enviarFormulario() {
  const nombre = document.getElementById("FormControlInputName").value;
  const correo = document.getElementById("FormControlInputEmail").value;
  const comentario = document.getElementById(
    "FormControlTextareaComments"
  ).value;

  if (nombre && correo && comentario) {
    const informacionFormulario = {
      nombre: nombre,
      correo: correo,
      comentario: comentario,
    };

    console.log("Enviando formulario:", informacionFormulario);

    location.reload();
  } else {
    alert("Por favor, complete todos los campos del formulario.");
  }
}
