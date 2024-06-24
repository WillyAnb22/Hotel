import bienvenida from"../components/bienvenida.vue"
import servicios from "../components/servicios.vue"
import habitaciones from "../components/habitaciones.vue"
import deportes from "../components/deportes.vue"
import contacto from "../components/contacto.vue"
import { createRouter,createWebHashHistory } from "vue-router"

const routes=[
    {path:"/",component:bienvenida},
    {path:"/habitaciones", component:habitaciones},
    {path:"/servicios", component:servicios},
    {path:"/deportes", component:deportes},
    {path:"/contacto", component:contacto},
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})
