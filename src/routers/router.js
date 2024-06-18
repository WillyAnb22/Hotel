import compras from "../components/compras.vue"
import productos from "../components/productos.vue"
import ventas from "../components/ventas.vue"
import bienvenida from"../components/bienvenida.vue"
import { createRouter,createWebHashHistory } from "vue-router"

const routes=[
    {path:"/",component:bienvenida},
    {path:"/compras", component:compras},
    {path:"/productos", component:productos},
    {path:"/ventas", component:ventas},
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})