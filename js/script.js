// let header=document.getElementById('header')
// let logo=document.getElementById('logo')
// logo.alt="texto alternativo desde js"
// logo.src='https://image.api.playstation.com/vulcan/ap/rnd/202309/0421/418704276d35ce02e8cb532c6ca3826cf866ad2ec66c0b17.png'

// let enlace=document.getElementsByClassName('enlace')
// console.log(enlace)
// enlace[0].textContent='esto es un enlace'
// enlace[0].href='https://www.google.com/'
// enlace[0].target='_blank'


function mostrarImagen() {
    let logo=document.getElementById("logo")
    logo.src='https://image.api.playstation.com/vulcan/ap/rnd/202309/0421/418704276d35ce02e8cb532c6ca3826cf866ad2ec66c0b17.png'
    logo.alt=""
}
function eliminarImagen() {
    let logo=document.getElementById("logo")
    logo.src=""
    logo.alt=""
}

function login() {
    let correo =document.getElementById("correo")
    let contrasena=document.getElementById("constrasena")
     //value es para los inputs
    if (correo.value==='daniel' && contrasena.value==='1234') {
        location.href='https://www.google.com/'
        
    } 

}


