<template>
  <div>
    <div class="imgHabi">
      <img src="../components/bannerhabi.jpg" alt="">
      <h2>HABITACIONES</h2>
    </div>
    <div class="habitaciones">
      <div class="habi">
        <img src="./habi1.jpg">
      </div>
      <div class="habi">
        <img src="./habi1.jpg">
      </div>
      <div class="habi">
        <img src="./habi1.jpg">
      </div>
      <div class="habi">
        <img src="./habi1.jpg">
      </div>
      <div class="habi">
        <img src="./habi1.jpg">
      </div>
      <div class="habi">
        <img src="./habi1.jpg">
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
  justify-content: center;
  padding: 20px;
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
</style>