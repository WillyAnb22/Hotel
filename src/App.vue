<template>
  <div>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
        <q-toolbar-title>
          <q-avatar>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Hoeffler_H.svg/640px-Hoeffler_H.svg.png">
          </q-avatar>
          Hotel
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs class="rutas">
        <q-route-tab to="/" label="bienvenida" />
        <q-route-tab to="/compras" label="Compras" />
        <q-route-tab to="/productos" label="Productos" />
      </q-tabs>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" side="left" class="menu" overlay behavior="mobile" bordered>
      <div class="boton">
        <q-btn to="/" class="bienvenida" label="bienvenida" />
        <q-btn to="/compras" class="compras" label="Compras" />
        <q-btn to="/productos" class="produ" label="Productos" />
        <q-btn to="/ventas" class="ventas" glossy label="Ventas" />
      </div>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
<style>
.bg-primary{
  background-color: rgba(253, 253, 253, 0.462) !important;
}
.rutas{
  color: goldenrod;
  font-weight: bold;
}
</style>