// ENVIAR EL SCROLL DEL INDEX HASTA LA SECCIÓN DE PRODUCTOS
let enlace = document.getElementById('enlace')

window.addEventListener('scroll', () => console.log(window.scrollY))
enlace.addEventListener('click', moverScroll)

function moverScroll (){
    if((screen.width >= 320) && (screen.width <= 374)){
        window.scrollTo({
            behavior: "smooth",
            top: 655
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