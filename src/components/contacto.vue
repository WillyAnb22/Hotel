<template>
  <div class="padre">
    <div class="caja">
      <div class="for"></div>
      <label for="name">Nombre</label>
      <input type="text" v-model="name" placeholder="Ingrese su nombre" />
      <span v-if="errorName" class="error">{{ errorName }}</span>

      <label for="precio">Precio</label>
      <input type="text" v-model="precio" placeholder="Ingrese el precio" /><br /><br />
      <span v-if="errorPrecio" class="error">{{ errorPrecio }}</span>

      <label for="costo">Costo</label>
      <input type="text" v-model="costo" placeholder="Ingrese el costo" /><br /><br />
      <span v-if="errorCosto" class="error">{{ errorCosto }}</span>

      <label for="proveedor">Proveedor</label>
      <input type="text" v-model="prove" placeholder="Ingrese el proveedor" /><br /><br />
      <span v-if="errorProveedor" class="error">{{ errorProveedor }}</span>

      <button @click="guardar()">Agregar</button><br />
    </div>
  </div>
</template>

<style>
.titulo {
  display: grid;
  justify-content: center;
  align-items: center;
}

.padre {
  display: grid;
  justify-content: center;
}

.caja {
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  background-color: antiquewhite;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  background-color: antiquewhite;
  width: 35rem;
  height: 25rem;
}
.for{
  margin-top: 80px;
}
</style>
