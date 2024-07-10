<template>
  <div class="padre">
    <div class="caja">
      <div class="for"></div>
      <label for="name">Nombre</label>
      <input type="text" v-model="name" placeholder="Ingrese su nombre" />
      <!-- <span v-if="errorName" class="error">{{ errorName }}</span> -->
       
      <form action="procesar_contacto.php" method="post">
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" required><br>

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="telefono">Teléfono:</label>
    <input type="tel" id="telefono" name="telefono"><br>

    <label for="asunto">Asunto:</label>
    <input type="text" id="asunto" name="asunto" required><br>

    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" required></textarea><br>

    <label for="preferencia_contacto">Preferencia de contacto:</label>
    <select id="preferencia_contacto" name="preferencia_contacto">
        <option value="email">Correo electrónico</option>
        <option value="telefono">Teléfono</option>
    </select><br>

    <label for="captcha">Captcha:</label>
    <!-- Aquí iría el captcha, por ejemplo, Google reCAPTCHA -->

    <input type="submit" value="Enviar">
</form>

    </div>
    <div id="map" style="height: 400px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      roomType: 'individual'
    };
  }
};
</script>

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
  width: 35rem;
  height: auto;
}

.for {
  margin-top: 80px;
}
</style>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('map').setView([25.197222222222, 55.274166666667], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([25.197222222222, 55.274166666667]).addTo(map)
    .bindPopup('Hotel Paraíso')
    .openPopup();
});
</script>
