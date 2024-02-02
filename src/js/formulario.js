import "../config/db.js";
import {
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
import { storage } from "../config/db.js";

const tamano = document.getElementById("tamano");
const contieneVentana = document.getElementById("contieneVentana");
const presupuesto = document.getElementById("presupuesto");
const puerta = document.getElementById("puerta");
const ventana = document.getElementById("ventana");
const final = document.getElementById("final");

const iframeTamano = document.getElementById("tamano").querySelector("iframe");
const iframeContieneVentana = document
  .getElementById("contieneVentana")
  .querySelector("iframe");
const iframePresupuestoHabitacion = document
  .getElementById("presupuesto")
  .querySelector("iframe");
const iframePuerta = document.getElementById("puerta").querySelector("iframe");
const iframeVentana = document
  .getElementById("ventana")
  .querySelector("iframe");
const iframeFinal = document.getElementById("final").querySelector("iframe");

function getElementFromIframe(iframe, selector) {
  return iframe.contentDocument.querySelector(selector);
}

const formularioArea = getElementFromIframe(iframeTamano, "#formularioArea");
const formularioContieneVentana = getElementFromIframe(
  iframeContieneVentana,
  "#formularioContieneVentana"
);
const formularioPresupuestoHabitacion = getElementFromIframe(
  iframePresupuestoHabitacion,
  "#formularioPresupuestoHabitacion"
);
const formularioPuerta = getElementFromIframe(
  iframePuerta,
  "#formularioPuerta"
);
const formularioVentana = getElementFromIframe(
  iframeVentana,
  "#formularioVentana"
);
const imagenFinal = getElementFromIframe(iframeFinal, ".imagenFinal");

let storageRef;

let largoHabitacion = getElementFromIframe(iframeTamano, "#largoHabitacion");
let altoHabitacion = getElementFromIframe(iframeTamano, "#altoHabitacion");
let anchoHabitacion = getElementFromIframe(iframeTamano, "#anchoHabitacion");
let tablitaProductos = getElementFromIframe(iframeFinal, "#tablitaProductos");
let precioTotalTotal = getElementFromIframe(iframeFinal, "#precioTotalTotal");


let botonVolver1 = getElementFromIframe(iframeContieneVentana, "#volver");
botonVolver1.addEventListener("click", volver1);

let siVentana = getElementFromIframe(
  iframeContieneVentana,
  'input[name="options"]'
);

let presupuestoHabitacion = getElementFromIframe(
  iframePresupuestoHabitacion,
  "#presupuestoHabitacion"
);

let aux;
let aux2;
let dimensiones;
let opcionPuerta;
let opcionVentana;
let presupuestoHabitacionTotal;

formularioArea.addEventListener("submit", tamanoHabitacion);
formularioContieneVentana.addEventListener("submit", preguntaContieneVentanas);
formularioPresupuestoHabitacion.addEventListener(
  "submit",
  presupuestoDeHabitacion
);
formularioPuerta.addEventListener("submit", preguntaPuertas);
formularioVentana.addEventListener("submit", preguntaVentanas);

function volver1() {
  contieneVentana.classList.add("disabled");
  tamano.classList.remove("disabled");
}

/* Formulario Tamaño Habitacion */

function tamanoHabitacion() {
  largoHabitacion = largoHabitacion.value;
  altoHabitacion = altoHabitacion.value;
  anchoHabitacion = anchoHabitacion.value;

  let volumenHabitacion = largoHabitacion * altoHabitacion * anchoHabitacion;

  if (volumenHabitacion >= 75000000) {
    dimensiones = "Habitacion_Grande";
  } else if (40000000 < volumenHabitacion) {
    dimensiones = "Habitacion_Mediana";
  } else {
    dimensiones = "Habitacion_Pequeña";
  }

  tamano.classList.add("disabled");
  contieneVentana.classList.remove("disabled");
}

function preguntaContieneVentanas() {
  let opcion = "";

  if (siVentana && siVentana.checked) {
    opcion = siVentana.value;
  }

  if (opcion == "True") {
    aux = true;
    aux2 = "Con_Ventana";
  } else {
    aux = false;
    aux2 = "Solo_Puerta";
  }

  contieneVentana.classList.add("disabled");
  presupuesto.classList.remove("disabled");
}

function presupuestoDeHabitacion() {
  presupuestoHabitacionTotal = presupuestoHabitacion.value;

  console.log(presupuestoHabitacionTotal);

  presupuesto.classList.add("disabled");
  puerta.classList.remove("disabled");
}

/* Formulario Con Puertas */

function preguntaPuertas() {
  const radioSeleccionado = formularioPuerta.querySelector(
    'input[name="grupoRadios"]:checked'
  );

  opcionPuerta = radioSeleccionado.value;

  const elementoVentana = formularioVentana.querySelector(
    `input[value="${opcionPuerta}"]`
  );

  if (elementoVentana) {
    elementoVentana.closest("label").remove();
  }

  puerta.classList.add("disabled");

  if (aux == true) {
    ventana.classList.remove("disabled");
  } else {
    final.classList.remove("disabled");
    resultadoFinal();
  }
}

/* Formulario Con Ventanas */

function preguntaVentanas() {
  const radioSeleccionado = formularioVentana.querySelector(
    'input[name="grupoRadios"]:checked'
  );

  opcionVentana = radioSeleccionado.value;

  ventana.classList.add("disabled");
  final.classList.remove("disabled");

  resultadoFinal();
}

async function resultadoFinal() {
  if (aux == true) {
    storageRef = ref(
      storage,
      `final/${dimensiones}/Con_Ventanas/${opcionPuerta}/${opcionVentana}.jpg`
    );
  } else {
    storageRef = ref(
      storage,
      `final/${dimensiones}/Solo_Puertas/${opcionPuerta}.jpg`
    );
  }

  try {
    const imagenUrl = await getDownloadURL(storageRef);

    imagenFinal.style.backgroundImage = `url("${imagenUrl}")`;

    let productosObtenidos = await obtenerProductos();

    mostrarTabla(productosObtenidos);
  } catch (e) {
    console.log(e);
  }
}

function calcularPrecioTotal(productosObtenidos) {
  precioTotalTotal.innerHTML = productosObtenidos
    .reduce((acc, prod) => acc + prod.precio, 0)
    .toFixed(2);
}

function mostrarTabla(productosObtenidos) {
  calcularPrecioTotal(productosObtenidos);

  productosObtenidos.forEach((product) => {
    function crearTabla(producto) {
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");

      tr.innerHTML = `
    <td>${producto.tipo} </td>
    <td>${producto.modelo} </td>
    <td>${producto.precio} </td>
    <td>
      <div class="linkDelete">
        <a href="${producto.link}" class="btn btn-color">Ver Producto</a>
        <button
          type="button"
          id="${producto.modelo}"
          class="btn-close botones-elminar-producto"
        ></button>
      </div>
    </td>
  `;

      tbody.appendChild(tr);

      tablitaProductos.append(tbody);

      const btnEliminar = tbody.querySelector(".botones-elminar-producto");
      btnEliminar.addEventListener("click", () => {
        elminarProducto(product, tr);
      });
    }
    crearTabla(product);
  });
}

function elminarProducto(producto, fila) {
  console.log(producto);
  console.log(fila);

  if (fila) {
    fila.remove();

    precioTotalTotal.innerHTML = (
      parseFloat(precioTotalTotal.innerHTML) - parseFloat(producto.precio)
    ).toFixed(2);
  }
}

async function obtenerProductos() {
  const datos = "../../JSON.json";
  const datos2 = "../../Json2.json";
  let productosFinalmenteSeleccionados;

  try {
    // Utilizamos Promise.all para esperar a que ambas solicitudes de fetch se completen
    const [prodJson, prodJson2] = await Promise.all([
      fetch(datos).then((response) => response.json()),
      fetch(datos2).then((response) => response.json()),
    ]);

    // Llamamos a mejoresProductos y esperamos a que se complete antes de devolver el resultado

    productosFinalmenteSeleccionados = await mejoresProductos(
      prodJson,
      prodJson2
    );

    return productosFinalmenteSeleccionados;
  } catch (error) {
    console.error("Error al leer los archivos JSON:", error);
  }

  async function mejoresProductos(prodJson, prodJson2) {
    async function seleccionarProductos(json, presupuesto) {
      let productosCategoria2 = [];
      let auxiliar;
      let totalValor = 0;
      let resultadoFinal = [];

      // Iterar sobre cada categoría
      for (let categoria of json.productos) {
        let productosCategoria = Object.values(categoria).flat(); // Obtener todos los productos de la categoría
        productosCategoria.sort((a, b) => b.precio - a.precio); // Ordenar los productos por precio de mayor a menor

        productosCategoria2.push(productosCategoria);
      }

      for (let a = 0; a <= productosCategoria2[0].length; a++) {
        // <-- Este indica por cuáles precios va, es decir, inicia en muy caros

        let productosSeleccionados = [];

        for (let i = 0; i < productosCategoria2.length; i++) {
          productosSeleccionados.push({ ...productosCategoria2[i][a] });
        }

        //console.log(productosSeleccionados);

        let productos2 = [];

        productosSeleccionados.forEach((produc) => {
          productos2.push(produc);
        });

        totalValor = productosSeleccionados.reduce(
          (acc, prod) => acc + prod.precio,
          0
        );

        if (totalValor <= presupuesto) {
          resultadoFinal = productosSeleccionados;
          auxiliar = true;
          break;
        } else {
          auxiliar = await procesarProductos(
            productosSeleccionados,
            productosCategoria2,
            a
          );

          if (auxiliar != true) {
            //resultadoFinal = productosSeleccionados;
            //resultadoFinal = {...auxiliarFinal};
            resultadoFinal = auxiliar;
            auxiliar = true;
            break;
          }

          auxiliar = await procesarProductosParte2(
            productosSeleccionados,
            productosCategoria2,
            a
          );

          if (auxiliar != true) {
            //resultadoFinal = productosSeleccionados;
            //resultadoFinal = {...auxiliarFinal};
            resultadoFinal = auxiliar;
            auxiliar = true;
            break;
          }
        }
      }

      if (auxiliar == true) {
        return resultadoFinal;
      } else {
        return false;
      }
    }

    async function procesarProductos(
      productosSeleccionados,
      productosCategoria2,
      a
    ) {
      let guardarValorAnterior = [];
      let verificador = false;
      let totalValor;
      let encontrado = [];

      for (let i = 0; i < 9; i++) {
        await new Promise((resolve) => setTimeout(resolve, i * 0));

        guardarValorAnterior = [];

        guardarValorAnterior.push({ ...productosSeleccionados[i] });

        productosSeleccionados.splice(i, 1, productosCategoria2[i][a + 1]);

        totalValor = productosSeleccionados.reduce(
          (acc, prod) => acc + prod.precio,
          0
        );

        if (totalValor <= presupuesto) {
          verificador = true;
          encontrado.push({ ...productosSeleccionados });
          //console.log(totalValor);
          break;
        }

        productosSeleccionados.splice(i, 1, { ...guardarValorAnterior[0] });
      }

      if (verificador == true) {
        return productosSeleccionados;
      } else {
        return true;
      }
    }

    async function procesarProductosParte2(
      productosSeleccionados,
      productosCategoria2,
      a
    ) {
      let verificador = false;
      let totalValor;
      let encontrado = [];

      for (let i = 0; i < 9; i++) {
        await new Promise((resolve) => setTimeout(resolve, i * 1));

        let guardarValoresAnterior2 = [];

        for (let j = 0; j <= i; j++) {
          await new Promise((resolve) => setTimeout(resolve, j * 1));

          guardarValoresAnterior2.push({ ...productosSeleccionados[j] });

          productosSeleccionados.splice(j, 1, productosCategoria2[j][a + 1]);
        }

        totalValor = productosSeleccionados.reduce(
          (acc, prod) => acc + prod.precio,
          0
        );

        if (totalValor <= presupuesto) {
          //console.log(productosSeleccionados);
          //console.log(totalValor);
          encontrado.push({ ...productosSeleccionados });
          verificador = true;
          //console.log(encontrado)
          break;
        }

        /*
        for (let j=0; j<i; j++) {
  
          await new Promise(resolve => setTimeout(resolve, j * 1000));
          productosSeleccionados.splice(j, 1, { ...guardarValoresAnterior2[j] });
  
        }*/
      }

      if (verificador == true) {
        return productosSeleccionados;
      } else {
        return true;
      }
    }

    async function probarPresupuesto() {
      let productos2;
      let total2;
      let productos;
      let total;
      let ProductosFinal;

      productos2 = await seleccionarProductos(
        prodJson2,
        presupuestoHabitacionTotal
      );
      total2 = productos2.reduce((acc, prod) => acc + prod.precio, 0);

      productos = await seleccionarProductos(
        prodJson,
        presupuestoHabitacionTotal
      );
      total = productos.reduce((acc, prod) => acc + prod.precio, 0);

      if (total > total2) {
        ProductosFinal = productos;
      } else {
        ProductosFinal = productos2;
      }

      return ProductosFinal;
    }

    let productosSeleccionadosFinalizados = await probarPresupuesto();
    return productosSeleccionadosFinalizados;
  }
}
