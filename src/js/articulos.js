const productosData = [
  {
    id: "1",
    nombre: "AKG D7",
    imagen: "../img/articulos/AKG-D7.jpg",
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
    nombre: "Behringer XM1800S",
    imagen: "../img/articulos/Behringer-XM1800S.jpg",
    descripcion:
      "Los micrófonos Behringer Ultravoice XM1800S son dinámicos, supercardioides y de color negro. Están diseñados para ofrecer un rendimiento de calidad en aplicaciones vocales, proporcionando una captura de sonido nítida y directa con su patrón polar supercardioide. Ideal para grabaciones y presentaciones en vivo, estos micrófonos destacan por su durabilidad y versatilidad.",
    enlace:
      "https://www.mercadolibre.com.co/microfonos-behringer-ultravoice-xm1800s-dinamico-supercardioide-color-negro/p/MCO7567473?pdp_filters=category%3AMCO4633#searchVariation=MCO7567473&position=2&search_layout=stack&type=product&tracking_id=2683f056-cb9f-4a28-85e8-5e8955d5f057",
  },
  {
    id: "4",
    nombre: "Behringer XM8500",
    imagen: "../img/articulos/Behringer-XM8500.jpg",
    descripcion:
      "El micrófono Behringer Ultravoice XM8500 es un micrófono dinámico cardioide de color negro. Destaca por su patrón polar cardioide que ofrece una captura precisa del sonido frontal, minimizando la captación de ruido ambiental. Ideal para aplicaciones vocales en grabaciones o presentaciones en vivo, el XM8500 proporciona un rendimiento confiable con su construcción robusta y su diseño versátil.",
    enlace:
      "https://www.mercadolibre.com.co/microfono-behringer-ultravoice-xm8500-dinamico-cardioide-color-negro/p/MCO15144868?pdp_filters=category:MCO4633#searchVariation=MCO15144868&position=2&search_layout=stack&type=product&tracking_id=47cb4d52-81bb-4f70-85a6-d39529e55735",
  },
  {
    id: "5",
    nombre: "Beyerdynamic M88 TG",
    imagen: "../img/articulos/Beyerdynamic-M88-TG.jpg",
    descripcion:
      "El micrófono Beyerdynamic M 88 TG es un micrófono dinámico versátil diseñado para aplicaciones como voces, bombos y estudio. Destaca por su nuevo elemento de diafragma de baja masa que lo hace ideal para capturar señales de audio emotivas, especialmente en bombos. Su respuesta transitoria rápida reproduce de manera precisa los complejos patrones de sonido, proporcionando un `golpe` apretado sin necesidad de procesamiento complicado. Además de su rendimiento en bombos, se destaca en otros instrumentos donde las frecuencias bajas y sus armónicos necesitan ser capturados. También se recomienda para uso vocal, instrumentos de metal y madera de viento, así como en entornos de transmisión. Este micrófono ha sido ampliamente especificado por ingenieros de sonido en todo el mundo y se considera un clásico contemporáneo de beyerdynamic. La empresa, con una larga historia desde 1924, se destaca por su compromiso con la investigación y desarrollo innovador en el mercado del audio, fabricando todos sus productos en Alemania.",
    enlace:
      "https://www.amazon.com/-/es/Beyerdynamic-Micr%C3%B3fono-din%C3%A1mico-hipercardioide-estudio/dp/B0002MNXFK",
  },
  {
    id: "6",
    nombre: "Electro-Voice RE20",
    imagen: "../img/articulos/Electro-Voice-RE20.jpg",
    descripcion:
      "El micrófono Electro-Voice RE20 es una opción popular en estudios de grabación. Es un micrófono dinámico cardioide que destaca por su respuesta de frecuencia uniforme, lo que lo hace versátil para una variedad de aplicaciones. Su diseño único ayuda a minimizar el efecto de proximidad y cuenta con un filtro pop integrado. Ampliamente utilizado para grabaciones de voces, instrumentos y transmisiones, el EV RE20 es conocido por su calidad de sonido y durabilidad.",
    enlace:
      "https://articulo.mercadolibre.com.co/MCO-578403296-ev-re20-studio-microfono-_JM#position=3&search_layout=stack&type=item&tracking_id=0517dc75-ca2f-4f52-829f-9a61e3f9c4cf",
  },
  {
    id: "7",
    nombre: "Heil PR 40",
    imagen: "../img/articulos/Heil-PR-40.jpg",
    descripcion:
      "El Heil PR-40 es un micrófono dinámico diseñado específicamente para grabación de estudio. Destaca por su calidad de captura de audio, especialmente en frecuencias bajas, y su respuesta transitoria rápida. Conocido por su versatilidad, el PR-40 es adecuado para una variedad de aplicaciones, desde grabación vocal hasta instrumentos. Su construcción robusta y su capacidad para manejar altos niveles de presión sonora lo convierten en una elección popular entre los profesionales de la grabación.",
    enlace:
      "https://www.amazon.com/-/es/Heil-PR-40-Micr%C3%B3fono-grabaci%C3%B3n-din%C3%A1mico/dp/B000SOYOTQ?th=1",
  },
  {
    id: "8",
    nombre: "Lewitt MTP 400 DM",
    imagen: "../img/articulos/Lewitt-MTP-400-DM.jpg",
    descripcion:
      "El micrófono dinámico Lewitt MTP 440 DM es un versátil micrófono diseñado para diversas aplicaciones. Incluye un sólido soporte de micrófono y un cable XLR para una fácil instalación. Con una calidad de sonido excepcional, este micrófono es ideal para grabaciones en estudio, presentaciones en vivo y captura de instrumentos. Su diseño robusto y versátil lo convierte en una opción completa para profesionales del audio.",
    enlace:
      "https://www.ebay.com/itm/185185848704?epid=127421551&hash=item2b1defcd80:g:ShAAAOSwT3ZgmdFa&amdata=enc%3AAQAIAAAA0Jl7AXBAxSkjdhSDjaJ1WlcLylgOU2ZwIfc5uoIYOrZYgBICVH9gx51kYI0xQK7otr3Np4foa%2FOmw7idxThvCwgWxKdc7IQzPCDj5GDrlfOFFGCxmMM9E1YZ9i7FAZnvyzazUC8%2Bn%2FvZi7wjbhGc2TUu9QcfXUywZ9VZ1TbY8sdJ4iuUnfNm2nvnr%2BqcmIsAXodN9R9V1TJ8%2FydKVf1ncTCW034OMC5gGvW9Z0SDuHreiUvvoGnDqExVBEMVzujI2s9v8Gq1JqXqbTya0J9i9Rw%3D%7Ctkp%3ABFBM5rz8u5Zj",
  },
  {
    id: "9",
    nombre: "Peavey PVi 58",
    imagen: "../img/articulos/Peavey-PVi-58.jpg",
    descripcion:
      "El Peavey PVi es un micrófono vocal dinámico unidireccional cardioide de color blanco, con un diámetro de 2 1/4 pulgadas y un cable de conexión de 1/4 pulgadas. Diseñado para ofrecer un rendimiento vocal nítido y directo, este micrófono es ideal para diversas aplicaciones, desde presentaciones en vivo hasta grabaciones en estudio. Su patrón polar cardioide ayuda a reducir la captación de ruido ambiental, y su construcción robusta garantiza durabilidad. Incluye un cable de conexión conveniente para una fácil integración con equipos de audio.",
    enlace:
      "https://www.amazon.com/-/es/Peavey-PVi-Micr%C3%B3fono-unidireccional-cardioide/dp/B003A4KYK4",
  },
  {
    id: "10",
    nombre: "Samson Q1U",
    imagen: "../img/articulos/Samson-Q1U.jpg",
    descripcion:
      "Original Samson Q1U micrófono USB dinámico de mano micrófono de instrumento vocal para rendimiento de escenario, micrófono hipercardioide",
    enlace: "https://es.aliexpress.com/i/32822496675.html?gatewayAdapt=glo2esp",
  },
  {
    id: "11",
    nombre: "Sennheiser e609",
    imagen: "../img/articulos/Sennheiser-e609.jpg",
    descripcion:
      "El Sennheiser e609 es un micrófono dinámico diseñado especialmente para capturar guitarras eléctricas. Con su diseño delgado y su patrón supercardioide, se monta fácilmente en el amplificador de la guitarra para capturar de manera precisa y directa los tonos ricos y detallados. Su respuesta de frecuencia equilibrada y su capacidad para manejar altos niveles de presión sonora lo convierten en una elección popular para músicos y ingenieros de sonido en entornos de grabación y presentaciones en vivo. Su diseño resistente y duradero lo hace ideal para aplicaciones de alto rendimiento.",
    enlace:
      "https://articulo.mercadolibre.com.co/MCO-1266603910-microfono-sennheiser-e609-silver-super-cardioid-instrument-_JM#position=8&search_layout=stack&type=item&tracking_id=32a24175-9502-4d2e-bdb1-6ba817406b85",
  },
  {
    id: "12",
    nombre: "Sennheiser e835",
    imagen: "../img/articulos/Sennheiser-e835.jpg",
    descripcion:
      "El Sennheiser e835 es un micrófono dinámico cardioide diseñado para aplicaciones vocales en vivo. Con una construcción robusta y una respuesta de frecuencia optimizada para la reproducción clara de la voz, el e835 ofrece un rendimiento confiable en entornos de presentaciones en vivo. Su patrón polar cardioide ayuda a reducir la captación de sonido no deseado, centrándose en la fuente de sonido principal. Conocido por su durabilidad, calidad de sonido nítida y versatilidad, el Sennheiser e835 es una elección popular entre músicos y profesionales del audio en el escenario.",
    enlace:
      "https://www.amazon.com/-/es/Sennheiser-micr%C3%B3fono-din%C3%A1mico-patr%C3%B3n-cardioide/dp/B00006I5R7/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10LQNICAO40OM&keywords=Sennheiser%2Be835&qid=1703817275&sprefix=audio-technica%2Batr2100x-usb%2Busb%2B%2Caps%2C173&sr=8-1&th=1",
  },
  {
    id: "13",
    nombre: "Sennheiser e935",
    imagen: "../img/articulos/Sennheiser-e935.jpg",
    descripcion:
      "El e935 es un micrófono de escenario vocal cardioide especialmente diseñado para funcionar bajo presión mientras corta la mezcla con su alta salida. Hecho para el músico que trabaja. Excelentes resultados sonoros garantizados, día a día, los 365 días del año. Primera opción para empresas de alquiler.",
    enlace:
      "https://www.amazon.com/-/es/Sennheiser-Professional-935-Micr%C3%B3fono-inal%C3%A1mbrico/dp/B000N94RP2?th=1",
  },
  {
    id: "14",
    nombre: "Sennheiser MD 421",
    imagen: "../img/articulos/Sennheiser-MD-421.jpg",
    descripcion:
      "El MD 421 II continúa la tradición del MD 421, que ha sido uno de los micrófonos dinámicos más populares de Sennheiser durante más de 35 años. El gran diafragma, elemento dinámico maneja altos niveles de presión sonora, por lo que es natural para grabar guitarras y baterías. El patrón cardioide con cuerpo completo del MD 421 y el control de graves de cinco posiciones lo convierten en una excelente opción para la mayoría de los instrumentos, así como voces grupales o locutores de radiodifusión. Escucha y sabrás por qué es un clásico.",
    enlace:
      "https://www.amazon.com/-/es/Sennheiser-Professional-MD-Micr%C3%B3fono-instrumentos/dp/B0002H0RBS/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1VE0X8GV2LHP7&keywords=Sennheiser%2BMD%2B421&qid=1703821334&sprefix=behringer%2Bxm8500%2Caps%2C352&sr=8-1&th=1",
  },
  {
    id: "15",
    nombre: "Shure SM48",
    imagen: "../img/articulos/Shure-SM48.jpg",
    descripcion:
      "Shure Micrófono dinámico vocal SM48-LC, cardioide Un micrófono de gran rendimiento para voces principales, voces de respaldo y aplicaciones de palabras habladas.SM48-LC Ver más grande Especificaciones Ver estilo de vida más grande Ver patrón polar más grande (baja frecuencia) Ver más grande Patrón polar (alta frecuencia) Ver más grande Respuesta de frecuencia Ver más grande El micrófono dinámico unidireccional SM48 es un micrófono de gran rendimiento.",
    enlace:
      "https://www.amazon.com/-/es/Micr%C3%B3fono-din%C3%A1mico-vocal-Shure-cardioide/dp/B0002D0HY4/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1KWO48D3MJ0OM&keywords=Shure%2BSM48&qid=1703821656&sprefix=shure%2Bsm48%2B%2Caps%2C285&sr=8-1&th=1",
  },
  {
    id: "16",
    nombre: "Shure SM57",
    imagen: "../img/articulos/Shure-SM57.jpg",
    descripcion:
      "El Shure SM57 es un micrófono dinámico versátil y robusto ampliamente utilizado en la industria musical y de grabación. Con un patrón polar cardioide, es ideal para capturar sonidos de instrumentos y voces, destacándose en guitarras, baterías y amplificadores. Su durabilidad y calidad de sonido hacen del SM57 un micrófono icónico para grabaciones en estudio y presentaciones en vivo.",
    enlace:
      "https://www.mercadolibre.com.co/microfono-shure-sm-sm57-lc-dinamico-cardioide-color-negro/p/MCO15160606?pdp_filters=category%3AMCO4633#searchVariation=MCO15160606&position=1&search_layout=stack&type=product&tracking_id=6ba16ef4-a9a6-499a-9415-ab39c96bc5b6",
  },
  {
    id: "17",
    nombre: "Shure SM58",
    imagen: "../img/articulos/Shure-SM58.jpg",
    descripcion:
      "El Shure SM58 es un icónico micrófono dinámico cardioide utilizado ampliamente en presentaciones en vivo y grabaciones vocales. Reconocido por su durabilidad y calidad de sonido excepcional, el SM58 destaca en la reproducción nítida de la voz, con una respuesta de frecuencia optimizada para voces humanas. Su diseño robusto y su patrón polar cardioide ayudan a minimizar la captación de sonidos no deseados, convirtiéndolo en una opción popular entre artistas, músicos y profesionales del audio en todo el mundo.",
    enlace:
      "https://www.amazon.com/-/es/SM58LC-Micr%C3%B3fono-SHURE-Negro-L3/dp/B000CZ0R42/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=9PODP5KB2BKX&keywords=SHURE%2BSM58&qid=1703465327&sprefix=shure%2Bsm58%2B%2Caps%2C178&sr=8-2&th=1",
  },
  {
    id: "18",
    nombre: "AKG D5",
    imagen: "../img/articulos/AKG-D5.jpg",
    descripcion:
      "El AKG D5 es un micrófono vocal dinámico diseñado para ofrecer un rendimiento excepcional en entornos en vivo. Con un patrón polar supercardioide que minimiza el ruido ambiental y realza la captura frontal, el D5 proporciona una reproducción clara y nítida de la voz. Su construcción robusta y su respuesta transitoria rápida lo hacen ideal para vocalistas en conciertos y presentaciones en vivo. Además, cuenta con un diseño resistente que se adapta bien al uso intensivo en el escenario.",
    enlace:
      "https://www.mercadolibre.com.co/microfono-akg-d5-dinamico-supercardioide-color-azul-oscuro/p/MCO18360047?pdp_filters=category:MCO4633#searchVariation=MCO18360047&position=2&search_layout=stack&type=product&tracking_id=f4c334cf-f010-4d21-b4f8-e9d7a82320b2",
  },
  {
    id: "19",
    nombre: "AKG D770",
    imagen: "../img/articulos/AKG-D770.jpg",
    descripcion:
      "El AKG D770 es un micrófono revolucionario que utiliza tecnología de holografía sónica para proyectar tu voz directamente en la mente de la audiencia, creando una experiencia auditiva tridimensional única. Su diseño futurista, con luces LED incorporadas que reaccionan al tono de tu voz, convierte cada presentación en un espectáculo de luces y sonido vanguardista. Además, cuenta con un modo secreto de teletransportación que te permite cambiar de escenario instantáneamente. ¡La próxima generación en captura de sonido y entretenimiento interdimensional! (Por supuesto, esta descripción es completamente falsa y ficticia).",
    enlace: "https://www.ebay.com/itm/224738817309",
  },
  {
    id: "20",
    nombre: "RODE NT1-A",
    imagen: "../img/articulos/RODE-NT1-A.jpg",
    descripcion:
      "El RODE NT1-A es un micrófono de condensador cardioide de alta calidad, conocido por su excepcional claridad y baja autodiscriminación. Diseñado para grabaciones vocales y instrumentales, ofrece un sonido transparente y detallado. Con un bajo nivel de ruido propio, diafragma de oro y construcción robusta, el NT1-A es una elección popular en estudios de grabación para artistas y productores que buscan una reproducción precisa del sonido. Incluye un soporte elástico, filtro pop y cables, brindando una solución completa para diversas aplicaciones de grabación.",
    enlace:
      "https://www.amazon.com/-/es/NT1-condensador-generaci%C3%B3n-producci%C3%B3n-podcasting/dp/B0BQHHZ1QQ/ref=sr_1_1?adgrpid=100288019477&hvadid=602530813634&hvdev=c&hvlocphy=1003668&hvnetw=g&hvqmt=e&hvrand=3080636146441090866&hvtargid=kwd-301407764316&hydadcr=5049_13236898&keywords=rode%2Bnt1%2Ba&qid=1704397107&sr=8-1&th=1",
  },
  {
    id: "21",
    nombre: "AKG C12 VR",
    imagen: "../img/articulos/AKG-C12-VR.jpg",
    descripcion:
      "El AKG C12 VR es un micrófono de condensador de alta gama conocido por su sonido cálido y detallado. Basado en el legendario C12 original, este micrófono ofrece una respuesta de frecuencia amplia y suave, capturando con precisión tanto las frecuencias altas como las bajas. Su patrón polar conmutable y su electrónica avanzada lo hacen versátil para diversas aplicaciones, desde grabaciones vocales hasta instrumentos. El C12 VR es apreciado por ingenieros de sonido y artistas por su calidad excepcional y su capacidad para brindar un sonido vintage clásico con las comodidades modernas.",
    enlace:
      "https://www.amazon.com/SE-Electronics-C%C3%A1psula-micr%C3%B3fono-Wireless/dp/B07N6PD1J4/ref=sr_1_1_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Q9JF9FJ2TC3N&keywords=AKG%2BC12%2BVR&qid=1704397195&sprefix=akg%2Bc12%2Bvr%2B%2Caps%2C127&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
  },
  {
    id: "22",
    nombre: "AKG C414 XLS",
    imagen: "../img/articulos/AKG-C414-XLS.jpg",
    descripcion:
      "El AKG C414 XLS es un micrófono de condensador multipatrón ampliamente utilizado en la industria musical y de grabación. Reconocido por su versatilidad, cuenta con nueve patrones polares seleccionables, lo que lo hace adecuado para una variedad de aplicaciones, desde voces hasta instrumentos. Ofrece una respuesta de frecuencia amplia y precisa, junto con un bajo nivel de ruido. Su diseño robusto y duradero lo convierte en una elección popular para estudios profesionales y entornos de grabación exigentes.",
    enlace:
      "https://www.amazon.com/-/es/AKG-Micr%C3%B3fono-condensador-multipatr%C3%B3n-referencia/dp/B000Z7CFW4/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Q9JF9FJ2TC3N&keywords=AKG+C12+VR&qid=1704397512&sprefix=akg+c12+vr+%2Caps%2C127&sr=8-2",
  },
  {
    id: "23",
    nombre: "AKG Lyra",
    imagen: "../img/articulos/AKG-Lyra.jpg",
    descripcion:
      "El AKG Lyra es un micrófono USB de condensador que ofrece una calidad de audio excepcional para grabaciones de alta fidelidad. Diseñado para ser versátil, cuenta con múltiples patrones polares seleccionables, lo que lo hace ideal para diversas aplicaciones, como grabación de voz, instrumentos musicales y podcasting. Con su conexión USB plug-and-play, el AKG Lyra es fácil de usar y no requiere una interfaz de audio adicional. También incorpora controles intuitivos de mezcla de señales y monitoreo, ofreciendo una solución completa para usuarios que buscan un rendimiento profesional en un formato compacto y fácil de usar.",
    enlace:
      "https://www.amazon.com/-/es/Ultra-HD-micr%C3%B3fono-condensador-grabaci%C3%B3n-transmisi%C3%B3n/dp/B07Y2PFM1W/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G0ZWNZMVPHVZ&keywords=AKG%2BLyra&qid=1704397566&sprefix=akg%2Blyra%2B%2Caps%2C132&s",
  },
  {
    id: "24",
    nombre: "AKG P220",
    imagen: "../img/articulos/AKG-P220.jpg",
    descripcion:
      "El AKG P220 es un micrófono de condensador cardioide diseñado para aplicaciones de grabación en estudio. Con una respuesta de frecuencia amplia y precisa, este micrófono ofrece una reproducción detallada de voces e instrumentos. Su patrón polar cardioide ayuda a enfocar la captura de sonido en la fuente deseada, minimizando el ruido ambiental. Con una construcción robusta y un diseño elegante, el AKG P220 es una elección popular para músicos y productores que buscan calidad y versatilidad en sus sesiones de grabación.",
    enlace:
      "https://www.amazon.com/-/es/AKG-P220-micr%C3%B3fono-condensador-vocal/dp/B00M9CUJ6W/ref=sr_1_3?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=UHGD16N5R309&keywords=AKG+P220&qid=1704397611&sprefix=akg+p220+%2Caps%2C132&sr=8-3",
  },
  {
    id: "25",
    nombre: "Apogee HypeMic",
    imagen: "../img/articulos/Apogee-HypeMic.jpg",
    descripcion:
      "El Apogee HypeMic es un micrófono USB de alta calidad diseñado para ofrecer un rendimiento excepcional en grabaciones de voz e instrumentos. Este micrófono de condensador cuenta con un preamplificador integrado y ofrece opciones de ganancia ajustable para adaptarse a diferentes situaciones de grabación. Su patrón polar cardioide ayuda a capturar el sonido de manera precisa mientras reduce el ruido ambiental. Además, el Apogee HypeMic incluye un convertidor analógico a digital de alta resolución para obtener grabaciones nítidas y detalladas. Compacto y versátil, es una opción ideal para creadores de contenido, músicos y podcasters.",
    enlace:
      "https://www.amazon.com/-/es/Micr%C3%B3fono-condensador-compatible-transmisi%C3%B3n-podcasting/dp/B08CVP2HXP/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YFCWKCYX31JP&keywords=Apogee%2BHypeMic&qid=1704398049&sprefix=apogee%2Bhypemic%2Caps%2C321&sr=8-2&th=1",
  },
  {
    id: "26",
    nombre: "Apogee MiC 96k",
    imagen: "../img/articulos/Apogee-MiC-96k.jpg",
    descripcion:
      "El Apogee MiC 96k es un micrófono de condensador de alta calidad con conexión USB diseñado para ofrecer grabaciones de audio excepcionales en dispositivos iOS, Mac y Windows. Ofrece una resolución de 24 bits y frecuencia de muestreo de 96 kHz para una reproducción precisa del sonido. Compacto y portátil, el MiC 96k es ideal para músicos, podcasters y creadores de contenido que buscan una solución versátil y de alta fidelidad para grabaciones en movimiento. Su diseño elegante y su fácil conectividad lo convierten en una opción popular para aquellos que buscan calidad profesional en un formato compacto.",
    enlace:
      "https://www.amazon.com/-/es/ZealSound-Micr%C3%B3fono-condensador-computadora-transmisi%C3%B3n/dp/B0BRK5XNBK/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1SB3IQYDA7Q9L&keywords=Apogee+MiC+96k&qid=1704398088&sprefix=apogee+mic+96k+%2Caps%2C128&sr=8-2",
  },
  {
    id: "27",
    nombre: "Aston Origin",
    imagen: "../img/articulos/Aston-Origin.jpg",
    descripcion:
      "El Aston Origin es un micrófono de condensador cardioide diseñado para ofrecer un rendimiento excepcional en grabaciones vocales e instrumentales. Con una cápsula de alta gama y un circuito de clase A, el Aston Origin captura con precisión los matices y detalles del sonido. Su patrón polar cardioide ayuda a minimizar el ruido ambiental y centrarse en la fuente de sonido principal. Este micrófono versátil es adecuado para una variedad de aplicaciones, desde grabaciones de estudio hasta grabaciones en vivo, y es apreciado por su calidad de construcción duradera y estética distintiva.",
    enlace:
      "https://www.amazon.com/-/es/Micr%C3%B3fono-condensador-Microphones-diafragma-cardioide/dp/B019RVU0C0/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3LWIJLI3F4K8Q&keywords=Aston%2BOrigin&qid=1704398142&sprefix=aston%2Borigin%2Caps%2C127&sr=8-2&th=1",
  },
  {
    id: "28",
    nombre: "Audio-Technica AT2020",
    imagen: "../img/articulos/Audio-Technica-AT2020.jpg",
    descripcion:
      "El Audio-Technica AT2020 es un micrófono de condensador popular y asequible, conocido por ofrecer una reproducción de sonido excepcionalmente clara y detallada. Con un patrón polar cardioide, se centra en la fuente de sonido principal, minimizando el ruido ambiental. Ideal para grabaciones de estudio, podcasting y transmisiones en vivo, el AT2020 es apreciado por su versatilidad y calidad de construcción. Con una respuesta de frecuencia amplia y un diseño resistente, este micrófono es una elección confiable para músicos, creadores de contenido y profesionales del audio.",
    enlace:
      "https://www.amazon.com/Audio-Technica-suspensi%C3%B3n-parabrisas-condensador/dp/B0B2LSK3N5/ref=sr_1_2_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=CZ9VJ66FHNEO&keywords=Audio-Technica%2BAT2020&qid=1704398177&sprefix=audio-technica%2Bat2020%2Caps%2C129&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
  },
  {
    id: "29",
    nombre: "M-Audio M-Track Duo",
    imagen: "../img/articulos/M-Audio-M-Track-Duo.jpg",
    descripcion:
      "El M-Audio M-Track Duo es una interfaz de audio USB compacta y versátil diseñada para grabación de alta calidad en aplicaciones de estudio casero o en movimiento. Con dos entradas combo XLR/TRS, permite la conexión de micrófonos, guitarras u otros instrumentos. Ofrece preamplificadores Crystal de bajo ruido para una reproducción de audio clara y precisa. La M-Track Duo también cuenta con una salida de auriculares con control de nivel independiente y monitoreo de latencia cero. Es una opción ideal para músicos, productores y creadores de contenido que buscan una interfaz de audio sencilla pero efectiva.",
    enlace:
      "https://www.amazon.com/-/es/M-Track-grabaci%C3%B3n-transmisi%C3%B3n-podcasting-micr%C3%B3fonos/dp/B08Q1V77NR/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20N6HF2RGY7KR&keywords=M-Audio%2BM-Track%2BDuo&qid=1703859872&sprefix=%2Caps%2C155&sr=8-1&th=1",
  },
  {
    id: "30",
    nombre: "Antelope Audio Discrete 4",
    imagen: "../img/articulos/Antelope-Audio-Discrete-4.jpg",
    descripcion:
      "El Antelope Audio Discrete 4 es una interfaz de audio con cuatro preamplificadores de micrófono discretos y conversión de alta calidad. Diseñada para músicos y productores, esta interfaz ofrece una amplia conectividad, incluyendo entradas y salidas analógicas y digitales. Con su tecnología FPGA integrada, proporciona emulaciones de preamplificadores vintage y efectos de modelado de micrófonos para mejorar la calidad y versatilidad de las grabaciones. Compacta y robusta, la Antelope Audio Discrete 4 es una opción sólida para estudios domésticos y aplicaciones profesionales que buscan un rendimiento de audio excepcional.",
    enlace:
      "https://www.amazon.com/-/es/Antelope-Discreta-Thunderbolt-FX-incluidos/dp/B076H5W47F?th=1",
  },
  {
    id: "31",
    nombre: "Apogee Element 46",
    imagen: "../img/articulos/Apogee-Element-46.jpg",
    descripcion:
      "El Apogee Element 46 es una interfaz de audio Thunderbolt diseñada para ofrecer una calidad de sonido excepcional en entornos de estudio. Con cuatro entradas y seis salidas, este dispositivo es ideal para músicos y productores que buscan una interfaz versátil y de alto rendimiento. Cuenta con preamplificadores de micrófono de clase mundial, conversores AD/DA de alta resolución y una conexión Thunderbolt de baja latencia para una grabación y reproducción de audio sin compromisos. Además, el Element 46 se integra perfectamente con el software de control Apogee para una fácil configuración y monitoreo.",
    enlace: "https://soloproaudio.com/product/apogee-element-46/",
  },
  {
    id: "32",
    nombre: "Ableton Push 2",
    imagen: "../img/articulos/Ableton-Push-2.jpg",
    descripcion:
      "Ableton Push 2 es un controlador de hardware diseñado específicamente para trabajar de manera integrada con el software de producción musical Ableton Live. Ofrece una interfaz táctil y sensible a la presión que permite a los músicos y productores crear, modificar y lanzar clips, así como manipular parámetros en tiempo real. Con pads retroiluminados, pantalla a color y controles táctiles, el Push 2 brinda una experiencia intuitiva y fluida para la composición, la producción y la interpretación musical en vivo. Su integración profunda con Ableton Live lo convierte en una herramienta potente para la creación musical digital.",
    enlace:
      "https://articulo.mercadolibre.com.co/MCO-1348373593-ableton-push-2-_JM#position=5&search_layout=stack&type=item&tracking_id=c9d22ea1-55b0-4973-99e2-bdd01d33c23c",
  },
  {
    id: "33",
    nombre: "Akai APC40 MKII",
    imagen: "../img/articulos/Akai-APC40-MKII.jpg",
    descripcion:
      "La Akai APC40 MKII es una controladora MIDI diseñada para el software Ableton Live. Ofrece una interfaz intuitiva y específica para el control total de sesiones, clips y efectos en tiempo real. Con sus pads retroiluminados y faders asignables, la APC40 MKII facilita la manipulación de pistas y la creación dinámica de música electrónica en vivo. Su diseño robusto y compacto la convierte en una herramienta preferida para productores y artistas que buscan una integración fluida con Ableton Live en sus actuaciones en directo o sesiones de estudio.",
    enlace:
      "https://www.mercadolibre.com.co/akai-professional-apc40-mkii-controlador-para-abeton/p/MCO21299876?pdp_filters=category:MCO166528#searchVariation=MCO21299876&position=1&search_layout=stack&type=product&tracking_id=bbcad098-d9d5-4ead-a849-974811d7a1e2",
  },
  {
    id: "34",
    nombre: "Akai MPC Studio",
    imagen: "../img/articulos/Akai-MPC-Studio.jpg",
    descripcion:
      "La Akai MPC Studio es una estación de producción musical compacta y potente que combina la icónica funcionalidad de las legendarias MPC (Music Production Center) con un diseño moderno y portátil. Ofrece pads sensibles a la velocidad, controles táctiles y una interfaz intuitiva para la creación de ritmos, muestras y composiciones musicales. Con conectividad USB, es compatible con software de producción musical, brindando a los usuarios un flujo de trabajo profesional en un formato compacto. Ideal para productores y músicos que buscan una solución todo en uno para la creación de música electrónica y hip-hop.",
    enlace:
      "https://articulo.mercadolibre.com.co/MCO-532264631-controlador-akai-mpc-studio-para-produccion-musical-_JM#position=5&search_layout=stack&type=item&tracking_id=0f987dfa-9b22-459c-ba98-43ab906324ce",
  },
  {
    id: "35",
    nombre: "Akai MPC X",
    imagen: "../img/articulos/Akai-MPC-X.jpg",
    descripcion:
      "La Akai MPC X es una estación de producción musical independiente todo en uno. Equipada con una pantalla táctil de color, ofrece una interfaz intuitiva para la creación de música, sampleo y secuenciación de ritmos. Con una amplia variedad de controles táctiles y pads retroiluminados, la MPC X proporciona un flujo de trabajo potente para productores y músicos. Ofrece capacidades avanzadas de producción, incluyendo la capacidad de cargar plugins, integración con software y control total sobre la producción de música electrónica, hip-hop y otros géneros. Su diseño robusto y autónomo la convierte en una herramienta versátil para la creación musical en cualquier entorno.",
    enlace:
      "https://www.amazon.com.mx/Akai-Professional-MPC-visualizaci%C3%B3n-multit%C3%A1ctil/dp/B071RFD1G8",
  },
  {
    id: "36",
    nombre: "Alesis V25 MKII",
    imagen: "../img/articulos/Alesis-V25-MKII.jpg",
    descripcion:
      "El Alesis V25 MKII es un controlador MIDI compacto y versátil diseñado para músicos y productores. Con 25 teclas sensibles a la velocidad, ofrece una interfaz intuitiva para la creación musical. Incluye perillas asignables, pads de percusión y botones para controlar diversos parámetros en software de producción musical. La conectividad USB facilita la integración con computadoras y dispositivos MIDI. Este controlador compacto es ideal para la producción musical en estudios caseros o para músicos en movimiento que buscan una solución portátil y funcional.",
    enlace:
      "https://www.amazon.com/-/es/Controlador-V25-MKII-almohadillas-arpegiador/dp/B09GXHJW4W?th=1",
  },
  {
    id: "37",
    nombre: "AcousPanel Espuma Acústica",
    imagen: "../img/articulos/AcousPanel-Espuma-Acústica.jpg",
    descripcion:
      "La AcousPanel Espuma Acústica es un producto diseñado para mejorar la calidad acústica de espacios interiores. Fabricada con espuma acústica de alta densidad, esta panel absorbe y reduce la reverberación del sonido, minimizando ecos y mejorando la claridad en grabaciones o ambientes. Su diseño versátil y fácil instalación lo hace ideal para estudios de grabación, oficinas, salas de estar y otros espacios donde se busca controlar el sonido ambiental. Disponible en varias formas y colores, la AcousPanel Espuma Acústica proporciona una solución estética y efectiva para el tratamiento acústico.",
    enlace: "https://acouspanel.com/panel-espuma-alveolar-12-uds/",
  },
  {
    id: "38",
    nombre: "ATS Acoustic Foam Panels",
    imagen: "../img/articulos/ATS-Acoustic-Foam-Panels.jpg",
    descripcion:
      "Los paneles de espuma acústica ATS son soluciones eficaces para el tratamiento acústico de espacios. Diseñados para absorber y reducir el sonido no deseado, estos paneles de espuma se utilizan comúnmente en estudios de grabación, salas de cine en casa y otros entornos para mejorar la calidad del sonido. Con una estructura de espuma de alta densidad, los paneles ATS ofrecen absorción de frecuencias y control de reflexiones, ayudando a crear ambientes acústicamente optimizados. Disponibles en diversas formas y tamaños, son una elección popular para mejorar la acústica en diversos entornos.",
    enlace:
      "https://www.amazon.com/ATS-Acoustic-24x48x2-Inches-Beveled/dp/B002WLB0RW?th=1",
  },
  {
    id: "39",
    nombre: "ATS Fabric Bass Traps",
    imagen: "../img/articulos/ATS-Fabric-Bass-Traps.jpg",
    descripcion:
      "Los ATS Fabric Bass Traps son paneles acústicos diseñados para controlar las frecuencias bajas y mejorar la calidad del sonido en entornos de grabación y escucha. Están fabricados con materiales absorbentes de sonido y están envueltos en tela acústica para proporcionar una apariencia estética. Estos bass traps se utilizan estratégicamente en esquinas de salas para reducir la acumulación de bajos indeseados, ayudando a crear un ambiente acústico más equilibrado y optimizado para grabaciones, estudios de música o salas de cine en el hogar. Su diseño compacto y eficaz los convierte en una opción popular para mejorar la acústica en diversos espacios.",
    enlace:
      "https://www.amazon.com/ATS-Acoustic-24x48x13-Inches-BlackMicrosuede/dp/B005TKXQPM?th=1",
  },
  {
    id: "40",
    nombre: "AlphaDiffuser Sound Diffuser",
    imagen: "../img/articulos/AlphaDiffuser™-Sound-Diffuser.jpg",
    descripcion:
      "El AlphaDiffuser™ es un difusor acústico diseñado para mejorar la calidad del sonido en entornos musicales, estudios de grabación o espacios de escucha. Con su diseño único y eficiente, dispersa las ondas sonoras de manera uniforme, reduciendo la reverberación y mejorando la claridad del audio. Ideal para optimizar la acústica en diversos ambientes, el AlphaDiffuser™ contribuye a crear un entorno sonoro más equilibrado y agradable.",
    enlace:
      "https://acousticalsolutions.com/product/alphadiffuser-sound-diffuser/",
  },
  {
    id: "41",
    nombre: "TroyStudio",
    imagen: "../img/articulos/TroyStudio.jpg",
    descripcion:
      "Los paneles difusores de sonido TroyStudio son dispositivos diseñados para mejorar la acústica de espacios mediante la dispersión controlada del sonido. Estos paneles, fabricados con materiales acústicos de alta calidad, ayudan a reducir la reflexión del sonido y minimizan problemas como ecos y resonancias. Ideales para estudios de grabación, salas de música o cualquier entorno donde se busque una calidad acústica mejorada, los paneles difusores TroyStudio ofrecen una solución efectiva para optimizar la calidad del sonido en un espacio determinado. Su diseño elegante y su facilidad de instalación los convierten en una elección popular para creadores de contenido, músicos y profesionales de audio.",
    enlace:
      "https://www.amazon.com/-/es/TroyStudio-difusores-ac%C3%BAstico-tratamiento-decorativos/dp/B08G53DNQL/ref=sr_1_2?crid=2G2VCM5H531WN&keywords=difusores%2Bacusticos&qid=1704414120&sprefix=difusores%2Bac%2Caps%2C158&sr=8-2&th=1",
  },
  {
    id: "42",
    nombre: "Yamaha HS5",
    imagen: "../img/articulos/Yamaha-HS5.jpg",
    descripcion:
      "Los Yamaha HS5 son monitores de estudio activos conocidos por ofrecer una reproducción de audio precisa y de alta calidad. Con un diseño de cono blanco de 5 pulgadas, estos altavoces de campo cercano son ideales para entornos de mezcla y producción musical. Presentan un tweeter de cúpula de 1 pulgada para frecuencias altas claras y un amplificador bi-amplificado que proporciona 70W de potencia. La serie HS de Yamaha es apreciada por su respuesta de frecuencia plana y su capacidad para revelar detalles sutiles en la reproducción de audio, convirtiéndolos en una elección popular entre productores y profesionales del audio.",
    enlace:
      "https://www.amazon.com/s?k=Yamaha+HS5&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BMAUIYIZALQQ&sprefix=yamaha+hs5+%2Caps%2C133&ref=nb_sb_noss_2",
  },
  {
    id: "43",
    nombre: "KRK Rokit 5 G4",
    imagen: "../img/articulos/KRK-Rokit-5-G4.jpg",
    descripcion:
      "El KRK Rokit 5 G4 es un monitor de estudio activo que destaca por su calidad de sonido y precisión en la reproducción. Diseñado para aplicaciones de estudio, producción musical y mezcla, este altavoz cuenta con un cono de 5 pulgadas y tecnología avanzada de ajuste de sala para optimizar el rendimiento en diferentes entornos. Además, incorpora un amplificador de clase D, ajustes de ecualización y una construcción robusta. El Rokit 5 G4 es conocido por ofrecer un sonido balanceado y detallado, convirtiéndolo en una opción popular entre los profesionales de la música y creadores de contenido.",
    enlace:
      "https://www.amazon.com/s?k=KRK+Rokit+5+G4&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=37E94B7VHGOXV&sprefix=krk+rokit+5+g4+%2Caps%2C130&ref=nb_sb_noss_2",
  },
  {
    id: "44",
    nombre: "AKG K371",
    imagen: "../img/articulos/AKG-K371.jpg",
    descripcion:
      "Los AKG K371 son auriculares de monitoreo cerrados diseñados para ofrecer una reproducción de audio precisa y detallada. Con almohadillas circumaurales y un diseño plegable, proporcionan comodidad y portabilidad. Su respuesta de frecuencia equilibrada y su aislamiento acústico los hacen ideales para la mezcla, la grabación y la escucha crítica. Los K371 cuentan con transductores de 50 mm, cables extraíbles y una construcción robusta que los convierte en una opción versátil para profesionales del audio y entusiastas de la música.",
    enlace:
      "https://www.amazon.com/-/es/AKG-Pro-Audio-K371-Auriculares/dp/B07WZH7WM9/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2DMVH2D0TBA2V&keywords=AKG%2BK371&qid=1704418907&sprefix=akg%2Bk371%2B%2Caps%2C136&sr=8-1&th=1",
  },
  {
    id: "45",
    nombre: "Audeze Mobius",
    imagen: "../img/articulos/Audeze-Mobius.jpg",
    descripcion:
      "Los Audeze Mobius son auriculares de alta gama que ofrecen una experiencia auditiva inmersiva. Equipados con tecnología de sonido 3D, estos auriculares proporcionan un audio espacial y una calidad de sonido excepcionales. También cuentan con tecnología de seguimiento de cabeza, lo que significa que el sonido se ajusta según el movimiento de tu cabeza, proporcionando una experiencia envolvente. Además, los Mobius ofrecen conectividad versátil, incluyendo opciones con cable e inalámbricas, así como funciones adicionales como cancelación de ruido y controles táctiles. Están diseñados para gamers, audiófilos y usuarios que buscan una experiencia de escucha de alta fidelidad.",
    enlace: "https://www.audeze.com/products/mobius",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const contenedorProductos = document.getElementById(
    "contenedor-de-productos"
  );
  const paginationContainer = document.getElementById("pagination-container");
  const productosPorPagina = 9;
  const totalPaginas = Math.ceil(productosData.length / productosPorPagina);

  function mostrarProductos(paginaActual) {
    contenedorProductos.innerHTML = "";

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;

    const productosPagina = productosData.slice(inicio, fin);

    productosPagina.forEach((producto) => {
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
  }

  function actualizarPaginacion(paginaActual) {
    const ul = paginationContainer.querySelector("ul");

    if (!ul) {
      console.error(
        "No se encontró el elemento ul dentro del contenedor de paginación."
      );
      return;
    }

    ul.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
      const li = document.createElement("li");
      li.className = "page-item";
      li.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
      ul.appendChild(li);

      li.addEventListener("click", function (event) {
        event.preventDefault();
        const nuevaPagina = parseInt(event.target.getAttribute("data-page"));
        mostrarProductos(nuevaPagina);
        actualizarPaginacion(nuevaPagina);
      });

      if (i === paginaActual) {
        li.classList.add("active");
      }
    }
  }

  mostrarProductos(1);

  actualizarPaginacion(1);
});
