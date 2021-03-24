// APARECER Y OCULTAR EL MENÚ PARA PANTALLAS MOVILES SEGUN LA NECESDAD DEL USUARIO
let $boton = document.getElementById('botonMenu');
let $menu = document.getElementById('menuSecundario');
let $enlace = document.getElementsByClassName('enlace');
let menuDesplegado = false;

$boton.addEventListener('click', () => {
    if(menuDesplegado){
        ocultarMenu();
        menuDesplegado = false;
        $boton.classList.add('icon-menu');
        $boton.classList.remove('icon-cross');
    }else{
        mostrarMenu()
        menuDesplegado = true
        $boton.classList.add('icon-cross');
        $boton.classList.remove('icon-menu');
    }
})

for(let i = 0; i < $enlace.length; i++){
    $enlace[i].addEventListener('click', ocultarMenu);
    menuDesplegado = false;
}

//Función para aparecer el menú responsive
function mostrarMenu(){
    $menu.style.transform = 'translateX(0)';
}

//Función para ocultar el menú responsive
function ocultarMenu(){
    $menu.style.transform = 'translateX(-100%)';
}

// CODIGÓ ENCARGADO DE LLEVAR AL INICIO DE LA PAGINA CUANDO EL USUARIO UTILICE EL BOTON CORRESPONDIENTE
let $botonSubir = document.getElementById('botonSubir');
window.addEventListener('scroll', flechaVisible)
$botonSubir.addEventListener('click', subir);

// Función para permitir la visibilización de la flecha para esta tarea
function flechaVisible(){
    window.onscroll = () => {
        if(document.documentElement.scrollTop > 400){
            $botonSubir.style.display = 'flex';
        }else{
            $botonSubir.style.display = 'none';
        }
    }
}

// Función para subir hasta el inicio de la pagina
function subir(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}