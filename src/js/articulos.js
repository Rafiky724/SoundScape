const productosData = [
  {
    id: "1",
    nombre: "AKG D7",
    imagen: "../img/articulos/AKG_D7.jpg",
    descripcion:
      "El D7, micrófono dinámico, une cápsula de condensador y resonancia única. Varimotion para sonido claro, material laminado reduce resonancias. Patrón supercardioide permite alta ganancia sin retroalimentación. Filtro de paso alto y suspensión mecanoneumática eliminan ruido. Filtro de polvo metálico asegura durabilidad.",
    enlace:
      "https://www.amazon.com/-/es/referencia-D7-diagn%C3%B3stico-varimoci%C3%B3n-retroalimentaci%C3%B3n/dp/B001RP5HUU?th=1",
  },
  {
    id: "2",
    nombre: "ATR2100x-USB",
    imagen: "../img/articulos/ATR2100x-USB.jpg",
    descripcion:
      "ATRR2100x-USB, micrófono versátil, con salidas USB y XLR. Conversión analógico a digital (24 bits, hasta 192 kHz) para excelente fidelidad. Patrón polar cardioide reduce sonidos no deseados. Conector para auriculares con control de nivel Interruptor de encendido/apagado. Incluye cables USB y XLR, y soporte de escritorio con trípode plegable.",
    enlace:
      "https://www.amazon.com/-/es/Audio-Technica-Micr%C3%B3fono-cardioide-ATR2100x-USB-ATR/dp/B07ZPBFVKK/ref=sr_1_1_mod_primary_new?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=350G5JNWFE1GB&keywords=Audio-Technica%2BATR2100x-USB%2B(USB)&qid=1703817037&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=audio-technica%2Batr2100x-usb%2Busb%2B%2Caps%2C198&sr=8-1&th=1",
  },
  {
    id: "3",
    nombre: "ATR2100x-USB",
    imagen: "../img/articulos/ATR2100x-USB.jpg",
    descripcion:
      "ATRR2100x-USB, micrófono versátil, con salidas USB y XLR. Conversión analógico a digital (24 bits, hasta 192 kHz) para excelente fidelidad. Patrón polar cardioide reduce sonidos no deseados. Conector para auriculares con control de nivel Interruptor de encendido/apagado. Incluye cables USB y XLR, y soporte de escritorio con trípode plegable.",
    enlace:
      "https://www.amazon.com/-/es/Audio-Technica-Micr%C3%B3fono-cardioide-ATR2100x-USB-ATR/dp/B07ZPBFVKK/ref=sr_1_1_mod_primary_new?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=350G5JNWFE1GB&keywords=Audio-Technica%2BATR2100x-USB%2B(USB)&qid=1703817037&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=audio-technica%2Batr2100x-usb%2Busb%2B%2Caps%2C198&sr=8-1&th=1",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const contenedorProductos = document.getElementById(
    "contenedor-de-productos"
  );

  productosData.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
            <div class="card" style="width: 300px;">
              <img src="${producto.imagen}" class="card-img-top imagen-articulo" alt="${producto.nombre}" />
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">
                  <div class="accordion accordion-flush" id="accordionFlushExample-${producto.id}">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-heading-${producto.id}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${producto.id}" aria-expanded="false" aria-controls="flush-collapse-${producto.id}">
                          Descripción
                        </button>
                      </h2>
                      <div id="flush-collapse-${producto.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${producto.id}" data-bs-parent="#accordionFlushExample-${producto.id}">
                        <div class="accordion-body">${producto.descripcion}</div>
                      </div>
                    </div>
                  </div>
                </p>
                <a href="${producto.enlace}" target="_blank" class="btn btn-articulo">Ver Producto</a>
              </div>
            </div>
          `;
    contenedorProductos.appendChild(card);
  });
});
