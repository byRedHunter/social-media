let $botonRedes = document.querySelector('#boton-redes')
let $redes = document.querySelector('#redes')

let grados = 180
let marginTop = 0

$redes.classList.remove('ocultar-redes')
$botonRedes.style.transform = `rotate(${grados}deg)`
$botonRedes.style.margin = `${marginTop}px 0 0 0`

$botonRedes.addEventListener('click', function() {
    if( grados == 180 ) {
        grados = 0
        marginTop = 170
    } else {
        grados = 180
        marginTop = 0
    }

    $redes.classList.toggle('ocultar-redes')
    $botonRedes.style.transform = `rotate(${grados}deg)`
    $botonRedes.style.margin = `${marginTop}px 0 0 0`
})