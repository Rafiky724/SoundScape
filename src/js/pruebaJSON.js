const datos = "../../JSON.json";
const formPresupuesto = document.getElementById("formPresupuesto");
let prodJson;

fetch(datos)
  .then((response) => response.json())
  .then((data) => {
    prodJson = data; // Almacena el objeto JSON en la variable prodJson
  })
  .catch((error) => {
    console.error("Error al leer el archivo JSON:", error);
  });

formPresupuesto.addEventListener("submit", function (e) {
  e.preventDefault();

  const presupuesto = parseFloat(document.getElementById("presupuesto").value);

  function seleccionarProductos(json, presupuesto) {
    let productosSeleccionados = [];

    // Calcular el presupuesto disponible por producto
    const presupuestoPorProducto = presupuesto / calcularCantidadTotalCategorias(json);

    // Iterar sobre cada categoría
    for (let i = 0; i < json.productos.length; i++) {
      let categoria = json.productos[i];
      let mejorProducto = null;

      // Iterar sobre cada producto en la categoría
      for (let productosCategoria of Object.values(categoria)) {
        for (let producto of productosCategoria) {
          // Verificar si el producto cabe dentro del presupuesto por producto y si es mejor opción que la actual
          if (producto.precio <= presupuestoPorProducto && (!mejorProducto || Math.abs(producto.precio - presupuestoPorProducto) < Math.abs(mejorProducto.precio - presupuestoPorProducto))) {
            mejorProducto = producto;
          }
        }
      }

      // Si se encontró un producto que cabe en el presupuesto, agregarlo a la lista de productos seleccionados
      if (mejorProducto) {
        productosSeleccionados.push({ ...mejorProducto, categoria: i });
        presupuesto -= mejorProducto.precio; // Restar el precio del producto al presupuesto total
      } else {
        // Si no se encontró un producto que quepa en el presupuesto,
        // encontrar el producto más barato de la categoría actual y agregarlo
        const productosCategoria = Object.values(categoria).flat();
        const productoMasBarato = productosCategoria.reduce((min, prod) => (min.precio < prod.precio ? min : prod), productosCategoria[0]);

        productosSeleccionados.push({
          ...productoMasBarato,
          categoria: i,
        });

        presupuesto -= productoMasBarato.precio; // Restar el precio del producto al presupuesto total

        // Verificar si el presupuesto se ha excedido y ajustar el producto más caro
        if (presupuesto < 0) {
          const productosCategoriaOrdenados = productosCategoria.slice().sort((a, b) => b.precio - a.precio);
          const productoMasCaro = productosCategoriaOrdenados[0];

          if (productosSeleccionados.some(prod => prod.id === productoMasCaro.id)) {
            // Reducir el precio del producto más caro al precio del producto anterior (si existe)
            const indiceProductoMasCaro = productosSeleccionados.findIndex(prod => prod.id === productoMasCaro.id);
            const indiceProductoAnterior = productosCategoriaOrdenados.indexOf(productoMasCaro) + 1;

            if (indiceProductoAnterior < productosCategoriaOrdenados.length) {
              const productoAnterior = productosCategoriaOrdenados[indiceProductoAnterior];
              productosSeleccionados[indiceProductoMasCaro] = { ...productoAnterior, categoria: i };
              presupuesto += productoMasCaro.precio - productoAnterior.precio; // Ajustar el presupuesto
            }
          }
        }
      }
    }

    return productosSeleccionados;
  }

  // Función para calcular la cantidad total de categorías en el JSON
  function calcularCantidadTotalCategorias(json) {
    return json.productos.length;
  }

  let productos = seleccionarProductos(prodJson, presupuesto);
  let total = productos.reduce((acc, prod) => acc + prod.precio, 0);

  console.log(productos);
  console.log(total);
});
