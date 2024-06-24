<template>
    <div>
        <img class="imgIncio" src="../hotelinicio.jpg">
        <div class="overlay"></div>
        <div class="tarjeta">
            <div class="parrafo">
                <div class="bienvenido">Bienvenidos a Hotel</div>
                <hr><br>
                Combinamos lujo y comodidad para ofrecerle una estancia inolvidable.
                Nuestras elegantes habitaciones, servicios de primera clase y vistas
                unicas te permitaran disfrutar de unas vacaciones
                que te haran escapar de tu realidad.<br><br>
                ¡Esperamos darle la bienvenida pronto!
            </div>
        </div>
        <q-btn push to="../contacto" label="CONTACTANOS" />
    </div>
</template>
<style>
.imgIncio {
    position: absolute;
    bottom: 0%;
    width: 100%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    /* Ajusta el color y la opacidad según tus necesidades */
}

hr {
    border: 1px solid #fff;
}

.bienvenido {
    font-size: 30px;
}

.parrafo {
    color: white;
    position: absolute;
    font-size: 20px;
    font-style: italic;
    text-align: left;
    bottom: 38%;
    left: 2%;
    max-width: 450px;
    text-align: center;
}

.q-btn {
    background-color: antiquewhite;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px black;
    margin-top: 37%;
    left: 85%;
}
</style>
