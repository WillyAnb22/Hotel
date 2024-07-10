<template>
  <div>
    <div>
      <img class="imgDepor"
        src="https://www.comparaonline.cl/blog-statics/cl/uploads/2018/07/Deportes-extremos-en-el-mundo_-Vuelo-en-parapente.jpg">
      <h1 class="titulo">DEPORTES EXTREMOS</h1>
    </div>
    <div class="tarjetasdeportes">
      <div class="tarjet">
        <img
          src="https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/870_x_540/public/2023-06/climbing-g42cb58814_640.jpg?itok=19O-jOqD">
        <p class="titulotarjeta">Escalada</p>
        <p class="texto">
          Sube las montañas más desafiantes con vistas impresionantes.
          Precios:
          <br>Por persona: $50<br>
          Grupo: $40 por persona (mínimo 4 personas).
        </p>
      </div>
      <div class="tarjet">
        <img src="https://xplorercolombia.com/wp-content/uploads/2021/05/torrentism-en-san-gil-3.jpg">
        <p class="titulotarjeta">Rappel</p>
        <p class="texto">
          Desciende por paredes verticales y vive la adrenalina.<br>
          PRECIOS:<br>
          Por persona: $40<br>
          Grupo: $30 por persona (mínimo 3 personas).
          </p>
      </div>
      <div class="tarjet">
        <img
          src="https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2020/12/tirolesa-acapulco-diamante.jpg?resize=600%2C338&ssl=1">
        <p class="titulotarjeta">Tirolesa</p>
        <p class="texto">
          Vuela por los aires en emocionantes recorridos en tirolesa.<br>
          Por persona: $30 <br>
          Grupo: $20 por persona (mínimo 3 personas).</p>

      </div>
      <div class="tarjet">
        <img
          src="https://en.la-plagne.com/sites/default/files/styles/sit_full/public/sit/images/71756/20954411.jpg?itok=hunzi_EY">
        <p class="titulotarjeta">Rafting</p>
        <p class="texto">
          Navega por rápidos emocionantes en ríos turbulentos. <br>
          Por persona: $60<br>
          Grupo: $50 por persona (mínimo 4 personas).</p>
      </div>
      <div class="tarjet">
        <img
          src="https://cdn.getyourguide.com/img/tour/e743aa24feb8d888.png/145.jpg">
        <p class="titulotarjeta">Cabalgata</p>
        <p class="texto">
          Explora paisajes naturales montado a caballo.<br>
          Por persona: $40<br>
          Grupo: $30 por persona (mínimo 3 personas).</p>


      </div>
      <div class="tarjet">
        <img src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2023/12/18/6580504ddeb0a.r_d.1108-651-5418.jpeg">
        <p class="titulotarjeta">Descenso</p>
        <p class="texto">
          Desciende por rutas emocionantes en bicicleta de montaña.<br>
          Por persona: $55 <br>
          Grupo: $45 por persona (mínimo 3 personas).</p>
      </div>
    </div>
  </div>
</template>
<style>
.imgDepor {
  width: 100%;
  height: 100%;
  object-fit: COVER;
  position: absolute;
  bottom: 0%;
}

.titulo {
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 100px;
  font-style: italic;
  top: 35%;
  left: 30%;
  text-shadow: 0 0 10px rgb(131, 235, 28);
}
.tarjetasdeportes{
  top: 110%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  text-align: center;

}
.tarjet {
  margin: 40px;
  background-color: antiquewhite;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  height: 50rem;
}

.tarjet img {
  width: 100%;
  height: 40%;
  object-fit: cover;
}
.titulotarjeta{
  font-size: 50px;
}
.texto{
  font-size: 20px;
}
</style>
