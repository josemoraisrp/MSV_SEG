const form = document.querySelector(".Formulario-fale-conosco")
const mascara = document.querySelector(".Mascara-formulario")

/* ABRIR FORM */

function mostraForm() {

    form.style.left = "50%"
    form.style.top = "50%"

    form.style.transform = "translate(-50%, -50%)"

    mascara.style.visibility = "visible"
}

/* FECHAR FORM */

function esconderForm() {

    form.style.left = "-500px"

    mascara.style.visibility = "hidden"
}

/* VIDEO MAIS LENTO */

const video = document.getElementById("video-fundo")

video.playbackRate = 0.6
