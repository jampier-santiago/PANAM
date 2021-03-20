console.log(window.screen.orientation)
// ENVIAR EL SCROLL DEL INDEX HASTA LA SECCIÓN DE PRODUCTOS
let enlaceP = document.getElementsByClassName('enlace-productos')

window.addEventListener('scroll', () => console.log(window.scrollY))
for(let i = 0; i < enlaceP.length; i++){
    enlaceP[i].addEventListener('click', moverScroll)
}

function moverScroll (){
    if((screen.width >= 320) && (screen.width <= 374)){
        window.scrollTo({
            behavior: "smooth",
            top: 880
        })
    }else if((screen.width >= 375) && (screen.width <= 424)){
        window.scrollTo({
            behavior: "smooth",
            top: 543
        })
    }else if((screen.width >= 425) && (screen.width <= 767)){
        window.scrollTo({
            behavior: "smooth",
            top: 537
        })
    }else if((screen.width >= 768) && (screen.width <= 1023)){
        window.scrollTo({
            behavior: "smooth",
            top: 638
        })
    }else if((screen.width >= 1024) && (screen.width <= 1099)){
        window.scrollTo({
            behavior: "smooth",
            top: 652
        })
    }else if((screen.width >= 1100) && (screen.width <= 1439)){
        window.scrollTo({
            behavior: "smooth",
            //850
            top:100
        })
    }else if((screen.width >= 1440) && (screen.width <= 2559)){
        window.scrollTo({
            behavior: "smooth",
            //970
            top: 1160
        })
    }else{
        window.scrollTo({
            behavior: "smooth",
            top: 700
        })
    }
}

// APARECER Y OCULTAR EL MENÚ PARA PANTALLAS MOVILES SEGUN LA NECESDAD DEL USUARIO
let boton = document.getElementById('botonMenu')
let menu = document.getElementById('menuSecundario')
let enlace = document.getElementsByClassName('enlace')
let menuDesplegado = false

boton.addEventListener('click', () => {
    if(menuDesplegado){
        ocultarMenu()
        menuDesplegado = false
    }else{
        mostrarMenu()
        menuDesplegado = true
    }
})

for(let i = 0; i < enlace.length; i++){
    enlace[i].addEventListener('click', ocultarMenu)
    menuDesplegado = false
}

//Funcion para aparecer el menú responsive
function mostrarMenu(){
    menu.style.transform = 'translateX(0)'
}

//Funcion para ocultar el menú responsive
function ocultarMenu(){
    menu.style.transform = 'translateX(-100%)'
}