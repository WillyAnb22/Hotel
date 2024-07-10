<template>
  <div>
    <div class="img">
      <img class="img" src="../components/Recepcion-hotel.jpg" alt="">
    </div>
    <div class="TextoEntrada">
      <div class="tituloServicios">
        <h1>SERVICIOS</h1>
        <hr>
      </div>
      <div class="texto">
        Desde habitaciones lujosas y confortables hasta una amplia gama de instalaciones
        recreativas, estamos aquí para garantizar que tu estancia sea memorable.
        Ya sea que busques relajarte en nuestro spa, disfrutar de una cena gourmet
        en nuestro restaurante, o explorar las atracciones locales con nuestras
        excursiones organizadas, puedes confiar en nosotros para proporcionarte
        una experiencia que supere todas tus expectativas.
      </div>
    </div>
    <div class="servicios">
      <div class="servi">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrBR_sL2eUER_EM3XjrOOE99CmRlYh06Fog&s">
        <p class="titulotarjeta">DEPORTES EXTREMOS</p>
        <p class="texto">
          Para los amantes de la adrenalina, ofrecemos una variedad de deportes extremos.
          Desde escalada y rappel, hasta tirolesa y rafting, tenemos actividades
          que desafiarán tus límites y te dejarán con recuerdos inolvidables.
        </p>
      </div>
      <div class="servi">
        <img src="https://media.disneylandparis.com/d4th/es-es/images/n018429_2050jan01_ranch-davy-crocketts-swimming-pool_16-9_tcm797-159373.jpg?w=480">
        <p class="titulotarjeta">PSICINA</p>
        <p class="texto">
          Relájate y disfruta de un chapuzón en nuestra piscina.
          Ya sea que prefieras nadar unas vueltas para ejercitarte o
          simplemente tomar el sol,
          nuestro espacio acuático es perfecto para ti.
        </p>
      </div>
      <div class="servi">
        <img src="https://resizer.otstatic.com/v2/photos/wide-medium/2/47967436.jpg">
        <p class="titulotarjeta">RESTAURANTE</p>
        <p class="texto"> 
          Deléitate con una experiencia culinaria única en nuestro restaurante.
          Ofrecemos una amplia selección de platos, preparados con ingredientes
          frescos y de alta calidad, para satisfacer todos los gustos.
        </p>
      </div>
      <div class="servi">
        <img src="https://extension.usu.edu/healthwellness/images/camping.jpg">
        <p class="titulotarjeta">CAMPING</p>
        <p class="texto">
          Si prefieres una experiencia más cercana a la naturaleza,
          nuestra zona de camping es ideal. Rodeado de un entorno natural
          impresionante, podrás disfrutar de noches estrelladas y mañanas frescas
          en un ambiente tranquilo y seguro.</p>
      </div>
    </div>

  </div>
</template>
<style>
.img {
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 100vh;
}

/* .tituloServicios h1 {
  position: absolute;
  margin-left: 5%;
  font-style: italic;
  font-size: 4rem;
  color: white;
  margin-top: 10%;
} */

.TextoEntrada {
  color: white;
  position: absolute;
  font-size: 20px;
  font-style: italic;
  max-width: 600px;
  margin-left: 5%;
  margin-top: 5%;
}

.servicios {
  top: 110%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.servi {
  margin: 40px;
  background-color: antiquewhite;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  height: 50rem;
}

.servi img {
  width: 100%;
  object-fit: cover;
}

.titulotarjeta {
  margin-top: 3%;
  font-style: italic;
  text-align: center;
}
.texto{
  margin-top: 3%;
  font-style: italic;
  text-align: center;
}
</style>
