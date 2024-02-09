import "../config/db.js";
import {
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
import { storage } from "../config/db.js";

document.addEventListener('DOMContentLoaded', async function() {

  let iframes = document.querySelectorAll('iframe');

  function checkIframesLoaded() {
    for (var i = 0; i < iframes.length; i++) {
        if (!iframes[i].contentWindow.document || iframes[i].contentWindow.document.readyState !== 'complete') {
            return false;
        }
    }
    return true;
}

// Función que se ejecuta cuando todos los iframes están cargados
function allIframesLoaded() {
    console.log('Todos los iframes han cargado completamente');
    // Aquí colocas el código que deseas ejecutar una vez que todos los iframes estén cargados
}

// Verificar si los iframes ya están cargados
if (checkIframesLoaded()) {
    allIframesLoaded();
} else {
    // Escuchar el evento load en cada iframe
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].addEventListener('load', function() {
            if (checkIframesLoaded()) {
                allIframesLoaded();
            }
        });
    }
}

})


async function formulario(){

let productosObtenidos;

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

/*
if((iframeTamano == null) || (iframeContieneVentana == null) || (iframePresupuestoHabitacion == null) || (iframePuerta == null) || (iframeVentana == null) || (iframeFinal == null)){

  console.log("Recargar")
  location.reload();

}else{

  console.log(iframeTamano, iframeContieneVentana, iframePresupuestoHabitacion, iframePuerta, iframeVentana, iframeFinal)

}*/

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

let tablitaModal = getElementFromIframe(iframeFinal, "#tablitaProductosModal");

const loaderFinal = getElementFromIframe(iframeFinal, "#loader-pagina-final");

let storageRef;

let largoHabitacion = getElementFromIframe(iframeTamano, "#largoHabitacion");
let altoHabitacion = getElementFromIframe(iframeTamano, "#altoHabitacion");
let anchoHabitacion = getElementFromIframe(iframeTamano, "#anchoHabitacion");
let tablitaProductos = getElementFromIframe(iframeFinal, "#tablitaProductos");
let precioTotalTotal = getElementFromIframe(iframeFinal, "#precioTotalTotal");

let sinProductos = getElementFromIframe(iframeFinal, ".sinProductitos");


let botonVolver1 = getElementFromIframe(iframeContieneVentana, "#volver");
botonVolver1.addEventListener("click", volver1);
let botonVolver2 = getElementFromIframe(iframePresupuestoHabitacion, "#volver");
botonVolver2.addEventListener("click", volver2);
let botonVolver3 = getElementFromIframe(iframePuerta, "#volver");
botonVolver3.addEventListener("click", volver3);
let botonVolver4 = getElementFromIframe(iframeVentana, "#volver");
botonVolver4.addEventListener("click", volver4);

getElementFromIframe(iframeFinal, "#filtroMonitor").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[8].monitorEstudio;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroMicrofono").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[7].microfonosCondensador;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroMidi").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[6].midi;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroAudifono").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[5].audifonos;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroInterfaz").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[4].interfazAudio;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroMicrofonoD").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[3].microfonosDinamicos;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroTrampa").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[2].trampaBajo;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroDifusor").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[1].difusor;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

getElementFromIframe(iframeFinal, "#filtroPanel").addEventListener(
  "click",
  async function (e) {
    let productosModalTodos = await cargarProductosEnModal();
    let productosFiltrados = productosModalTodos[0].panelAcustico;

    await mostrarProductosFiltro(productosFiltrados);
    actualizarBotonAñadir();
  }
);

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

formularioArea.addEventListener("submit", function (event) {
  tamanoHabitacion(event);
});

formularioContieneVentana.addEventListener("submit", function (event) {
  preguntaContieneVentanas(event);
});

formularioPresupuestoHabitacion.addEventListener("submit", function (event) {
  presupuestoDeHabitacion(event);
});

formularioPuerta.addEventListener("submit", function (event) {
  preguntaPuertas(event);
});

formularioVentana.addEventListener("submit", function (event) {
  preguntaVentanas(event);
});

function volver1() {
  contieneVentana.classList.add("disabled");
  tamano.classList.remove("disabled");
}

function volver2() {
  presupuesto.classList.add("disabled");
  contieneVentana.classList.remove("disabled");
}

function volver3() {
  puerta.classList.add("disabled");
  presupuesto.classList.remove("disabled");
}

function volver4() {
  ventana.classList.add("disabled");
  puerta.classList.remove("disabled");
}

/* Formulario Tamaño Habitacion */

function tamanoHabitacion(e) {
  e.preventDefault();

  largoHabitacion = getElementFromIframe(iframeTamano, "#largoHabitacion");
  altoHabitacion = getElementFromIframe(iframeTamano, "#altoHabitacion");
  anchoHabitacion = getElementFromIframe(iframeTamano, "#anchoHabitacion");

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

  formularioArea.reset();
}

function preguntaContieneVentanas(e) {
  e.preventDefault();

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

  formularioContieneVentana.reset();
}

function presupuestoDeHabitacion(e) {
  e.preventDefault();

  presupuestoHabitacionTotal = presupuestoHabitacion.value;

  if (presupuestoHabitacionTotal < 270) {
    alert("con eso no compras ni un chicle cabron");
  } else {
    presupuesto.classList.add("disabled");
    puerta.classList.remove("disabled");
  }

  formularioPresupuestoHabitacion.reset();
}

/* Formulario Con Puertas */

function preguntaPuertas(e) {
  e.preventDefault();

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

  formularioPuerta.reset();
}

/* Formulario Con Ventanas */

function preguntaVentanas(e) {
  e.preventDefault();

  const radioSeleccionado = formularioVentana.querySelector(
    'input[name="grupoRadios"]:checked'
  );

  opcionVentana = radioSeleccionado.value;

  ventana.classList.add("disabled");
  final.classList.remove("disabled");

  resultadoFinal();

  formularioVentana.reset();
}

async function resultadoFinal() {
  loaderFinal.classList.remove("disabled");

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

    productosObtenidos = await obtenerProductos();

    mostrarTabla(productosObtenidos);
    loaderFinal.style.visibility = "hidden";
    setTimeout(function () {
      loaderFinal.style.opacity = "0";
    }, 100);
    actualizarBotonesEliminar();
  } catch (e) {
    console.log(e);
    loaderFinal.style.visibility = "hidden";
    setTimeout(function () {
      loaderFinal.style.opacity = "0";
    }, 100);
  }
}

let eliminarProducto;

function actualizarBotonesEliminar() {
  eliminarProducto = iframeFinal.contentDocument.querySelectorAll(".botones-elminar-producto");

  // Elimina los eventos anteriores
  eliminarProducto.forEach((boton) => {
    boton.removeEventListener("click", eliminarProductoSeleccionado);
  });

  // Agrega los nuevos eventos
  eliminarProducto.forEach((boton) => {
    boton.addEventListener("click", eliminarProductoSeleccionado);
  });
}

async function eliminarProductoSeleccionado(e){

  let productoAEliminar = e.currentTarget.id;

  for(let i=0; i<productosObtenidos.length; i++){

    if(productosObtenidos[i].modelo === productoAEliminar){

      productosObtenidos.splice(i, 1);
      break;

    }

  }

  //productosObtenidos = productosObtenidos.filter(producto => producto.modelo !== productoAEliminar);

  mostrarTabla(productosObtenidos);
  actualizarBotonesEliminar();

}

function calcularPrecioTotal(productosObtenidos) {


  precioTotalTotal.innerHTML = productosObtenidos.reduce((acc, prod) => acc + prod.precio, 0).toFixed(2);
  
}

function mostrarTabla(productosObtenidos) {
  tablitaProductos.innerHTML = "";

  if(productosObtenidos.length == 0){

    sinProductos.classList.remove("disabled");
    calcularPrecioTotal(productosObtenidos);

  }else{

    sinProductos.classList.add("disabled");

    calcularPrecioTotal(productosObtenidos);

    productosObtenidos.forEach((product) => {
      function crearTabla(producto) {
        const tbody = document.createElement("tbody");
        const tr = document.createElement("tr");

        tr.innerHTML = `
      <td>${producto.tipo} </td>
      <td>${producto.modelo} </td>
      <td>US $${producto.precio}</td>
      <td>
        <div class="linkDelete">
          <a href="${producto.link}" class="btn btn-color" target="_blank">Ver Producto</a>
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

        /*
        const btnEliminar = tbody.querySelector(".botones-elminar-producto");
        btnEliminar.addEventListener("click", () => {
          elminarProducto(product, tr);
        });*/
      }
      crearTabla(product);
    });
  
  }
}

/*
function elminarProducto(producto, fila) {
  if (fila) {
    fila.remove();

    precioTotalTotal.innerHTML = (
      parseFloat(precioTotalTotal.innerHTML) - parseFloat(producto.precio)
    ).toFixed(2);
  }

  
}*/

let botonModal = getElementFromIframe(iframeFinal, "#btnAbrirModal");
botonModal.addEventListener("click", async function (e) {
  let productosModalTodos = await cargarProductosEnModal();

  await productosModalSeleccionado(productosModalTodos);
  actualizarBotonAñadir();
});

async function cargarProductosEnModal() {
  const datos = "../../JSON.json";
  let productosModalTodos;

  try {
    const response = await fetch(datos);
    const data = await response.json();

    // Convertir los datos en un array
    productosModalTodos = Object.values(data.productos).flat();

    return productosModalTodos;
  } catch (error) {
    console.error("Error al leer los archivos JSON:", error);
  }
}

async function productosModalSeleccionado(producto) {
  tablitaModal.innerHTML = "";

  for (let categoria of producto) {
    const categoryName = Object.keys(categoria)[0];
    const productosCategoria = categoria[categoryName];

    productosCategoria.forEach((item) => {
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");

      tr.innerHTML = `
              <td>${item.tipo} </td>
              <td>${item.modelo} </td>
              <td>US $${item.precio}</td>
              <td>
                  <button class="btn btn-success añadir-seleccion" style="cursor: pointer" id="${item.modelo}" data-bs-dismiss="modal">+</button>
              </td>
          `;

      tbody.appendChild(tr);
      tablitaModal.append(tbody);
    });
  }
}

async function mostrarProductosFiltro(productos) {
  tablitaModal.innerHTML = "";

  productos.forEach((item) => {
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${item.tipo} </td>
            <td>${item.modelo} </td>
            <td>US $${item.precio}</td>
            <td>
                <button id="${item.modelo}" class="btn btn-success añadir-seleccion" style="cursor: pointer" data-bs-dismiss="modal">+</button>
            </td>
        `;

    tbody.appendChild(tr);
    tablitaModal.append(tbody);
  });
}

let añadirSeleccion;

function actualizarBotonAñadir() {
  añadirSeleccion =
    iframeFinal.contentDocument.querySelectorAll(".añadir-seleccion");

  añadirSeleccion.forEach((boton) => {
    boton.addEventListener("click", function (event) {
      añadirProductoSeleccionado(event);
    });
  });
}

async function añadirProductoSeleccionado(e) {
  let aBuscar = e.currentTarget.id;

  let productoEncontrado = await buscador(aBuscar);

  productosObtenidos.push(productoEncontrado);

  async function buscador(productoAEnocontrar) {
    let productosABuscar = await cargarProductosEnModal();
    for (let i = 0; i < productosABuscar.length; i++) {
      let categoria = productosABuscar[i];
      let nombreCategoria = Object.keys(categoria)[0];

      for (let j = 0; j < categoria[nombreCategoria].length; j++) {
        let producto = categoria[nombreCategoria][j];

        if (producto.modelo == productoAEnocontrar) {
          return producto;
        }
      }
    }
  }

  /*

  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${productoEncontrado.tipo} </td>
    <td>${productoEncontrado.modelo} </td>
    <td>US $${productoEncontrado.precio}</td>
    <td>
      <div class="linkDelete">
        <a href="${productoEncontrado.link}" class="btn btn-color" target="_blank">Ver Producto</a>
        <button
          type="button"
          id="${productoEncontrado.modelo}"
          class="btn-close botones-elminar-producto"
        ></button>
      </div>
    </td>
  `;

  tbody.appendChild(tr);

  tablitaProductos.append(tbody);*/

  mostrarTabla(productosObtenidos);

  calcularPrecioTotal(productosObtenidos)

  /*
  precioTotalTotal.innerHTML = (
    parseFloat(precioTotalTotal.innerHTML) +
    parseFloat(productoEncontrado.precio)
  ).toFixed(2);*/

  actualizarBotonesEliminar();

  /*
  const btnEliminar = tbody.querySelector(".botones-elminar-producto");
  btnEliminar.addEventListener("click", () => {
    elminarProducto(productoEncontrado, tr);
  });*/
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

}