const datos = "../../JSON.json";
const datos2 = "../../Json2.json";
const formPresupuesto = document.getElementById("formPresupuesto");
let prodJson;
let prodJson2;

fetch(datos)
  .then((response) => response.json())
  .then((data) => {
    prodJson = data; // Almacena el objeto JSON en la variable prodJson
  })
  .catch((error) => {
    console.error("Error al leer el archivo JSON:", error);
  });


fetch(datos2)
  .then((response) => response.json())
  .then((data) => {
    prodJson2 = data; // Almacena el objeto JSON en la variable prodJson
  })
  .catch((error) => {
    console.error("Error al leer el archivo JSON:", error);
  });

formPresupuesto.addEventListener("submit", function (e) {
  e.preventDefault();

  const presupuesto = parseFloat(document.getElementById("presupuesto").value);

  async function seleccionarProductos(json, presupuesto) {
    
    let productosCategoria2 = [];
    let auxiliar;
    let totalValor = 0;
    let resultadoFinal = [];
  
    // Iterar sobre cada categoría
    for (let categoria of json.productos) {
      let productosCategoria = Object.values(categoria).flat(); // Obtener todos los productos de la categoría
      productosCategoria.sort((a, b) => b.precio - a.precio); // Ordenar los productos por precio de mayor a menor
      
      productosCategoria2.push(productosCategoria)
      
    }

    for (let a=0; a<=productosCategoria2[0].length; a++){ // <-- Este indica por cuáles precios va, es decir, inicia en muy caros

      let productosSeleccionados = [];

      for (let i=0; i<productosCategoria2.length; i++) {

        productosSeleccionados.push({ ...productosCategoria2[i][a]});

      }

      //console.log(productosSeleccionados);

      let productos2 = [];

      productosSeleccionados.forEach(produc => {

        productos2.push(produc)

      })

      totalValor = productosSeleccionados.reduce((acc, prod) => acc + prod.precio, 0);

      if (totalValor <= presupuesto){

        resultadoFinal = productosSeleccionados;
        auxiliar = true;
        break;

      }else{

        auxiliar = await procesarProductos(productosSeleccionados, productosCategoria2, a);

        if(auxiliar != true){

          //resultadoFinal = productosSeleccionados;
          //resultadoFinal = {...auxiliarFinal};
          resultadoFinal = auxiliar;
          auxiliar = true;
          break;

        }

        auxiliar = await procesarProductosParte2(productosSeleccionados, productosCategoria2, a);

        if(auxiliar != true){

          //resultadoFinal = productosSeleccionados;
          //resultadoFinal = {...auxiliarFinal};
          resultadoFinal = auxiliar;
          auxiliar = true;
          break;

        }

      }

    }
  
    if(auxiliar == true){

      return resultadoFinal;

    }else{

      return false;

    }

  }

  async function procesarProductos(productosSeleccionados, productosCategoria2, a) {

    let guardarValorAnterior = []
    let verificador = false;
    let totalValor;
    let encontrado = [];

    for (let i=0; i<9; i++) {

      await new Promise(resolve => setTimeout(resolve, i * 0));

      guardarValorAnterior = [];

      guardarValorAnterior.push({ ...productosSeleccionados[i] });
        

      productosSeleccionados.splice(i, 1, productosCategoria2[i][a+1]);

      
      totalValor = productosSeleccionados.reduce((acc, prod) => acc + prod.precio, 0);

      if(totalValor <= presupuesto) {

        verificador = true;
        encontrado.push({...productosSeleccionados });
        //console.log(totalValor);
        break;

      }


      productosSeleccionados.splice(i, 1, { ...guardarValorAnterior[0] });
      

    }

    if(verificador == true) {

      return productosSeleccionados;

    }else{

      return true;

    }

  }

  async function procesarProductosParte2(productosSeleccionados, productosCategoria2, a) {

    let verificador = false;
    let totalValor;
    let encontrado = [];

    for (let i=0; i<9; i++) {

      await new Promise(resolve => setTimeout(resolve, i * 1));

      let guardarValoresAnterior2 = [];

      for (let j=0; j<=i; j++) {

        await new Promise(resolve => setTimeout(resolve, j * 1));

        guardarValoresAnterior2.push({ ...productosSeleccionados[j] });

        productosSeleccionados.splice(j, 1, productosCategoria2[j][a+1]);

      }

      totalValor = productosSeleccionados.reduce((acc, prod) => acc + prod.precio, 0);


      if(totalValor <= presupuesto) {

        //console.log(productosSeleccionados);
        //console.log(totalValor);
        encontrado.push({...productosSeleccionados });
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

    
    if(verificador == true) {

      return productosSeleccionados;

    }else{

      return true;

    }

  }

  (async () => {

    let productos2;
    let total2;
    let productos;
    let total;
    let ProductosFinal;

    productos2 = await seleccionarProductos(prodJson2, presupuesto);
    total2 = productos2.reduce((acc, prod) => acc + prod.precio, 0);

    productos = await seleccionarProductos(prodJson, presupuesto);
    total = productos.reduce((acc, prod) => acc + prod.precio, 0);

    if(total > total2){

      ProductosFinal = productos;
      console.log(ProductosFinal);
      console.log(total);
  
    }else{
  
      ProductosFinal = productos2;
      console.log(ProductosFinal);
      console.log(total2);
  
    }

  })();
  
  
});
