<template>
  <div>
    <div class="imgHabi">
      <img src="../components/bannerhabi.jpg" alt="">
      <h2>HABITACIONES</h2>
    </div>
    <div class="habitaciones">
      <div class="habi">
        <img src="https://www.cataloniahotels.com/es/blog/wp-content/uploads/2024/01/tipos-habitaciones-hotel.jpg">

        <p class="titulotarjeta"> Habitación Doble</p>
        <p class="texto">
          <img src="../components/iconos/cama.png">
          Dos Camas Individuales<br>
          <img src="../components/iconos/wifi.png">
          Wi-Fi<br>
          <img src="../components/iconos/tv.png">
          Televisión<br>
          <img src="../components/iconos/ventilador.png">
          Ventilador<br>
          <img src="../components/iconos/minibar.png">
          Minibar<br>
         <p id="precio">Precio:$300.000</p>
        </p>
      </div>
      <div class="habi">
        <img src="https://www.villaantilla.com/wp-content/uploads/2016/11/2021T_15830-1024x684.jpg">
        <p class="titulotarjeta"> Habitación Individual</p>
        <p class="texto">
          <img src="../components/iconos/cama.png">
          Cama Doble<br>
          <img src="../components/iconos/wifi.png">
          Wi-Fi<br>
          <img src="../components/iconos/tv.png">
          Televisión<br>
          <img src="../components/iconos/ventilador.png">
          Ventilador<br>
          <img src="../components/iconos/minibar.png">
          Minibar<br>
          <p id="precio">Precio:$200.000</p>
        </p>
      </div>
      <div class="habi">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/214388339.jpg?k=831cf6475c3544285356e0b7cc724962ff4b5db052c89519870b58bcb36cc872&o=&hp=1">
        <p class="titulotarjeta">
          Suite</p>
        <p class="texto">
          <img src="../components/iconos/cama.png">
          Cama King<br>
          <img src="../components/iconos/wifi.png">
          Wi-Fi<br>
          <img src="../components/iconos/tv.png">
          Televisión<br>
          <img src="../components/iconos/aire.png">
          Aire acondicionado<br>
          <img src="../components/iconos/minibar.png">
          Minibar<br>
          <p id="precio">Precio: $500.000</p>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.imgHabi img {
  width: 100%;
  height: 100%;
  object-fit: COVER;
  position: absolute;
  bottom: 0%;
}

h2 {
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 100px;
  font-style: italic;
  top: 35%;
  left: 30%;
  text-shadow: 0 0 10px rgb(234, 201, 14);
}

.habitaciones {
  top: 110%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  text-align: center;
}

.habi {
  margin: 40px;
  background-color: antiquewhite;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  height: 50rem;
}

.habi img {
  width: 100%;
  object-fit: cover;
}

.texto img {
  width: 8%;
  height: auto;
  object-fit: cover;
}
#precio{
  font-size: 1.4rem;
  font-style: italic;
  font-weight: bold; 
}
</style>
