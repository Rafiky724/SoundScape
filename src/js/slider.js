document
  .getElementById("presupuestoHabitacion")
  .addEventListener("input", function () {
    document.getElementById("outputPresupuesto").textContent = this.value;
  });
