/* para que el menu de opciones de despliegue */
let toggle = document.getElementById('toggle-menubar');
toggle.addEventListener('click', function() {
    let style = document.getElementById('navbar');
    style.classList.toggle('nav-responsive');
})

/*
La funcion del codigo abajo es para 
que el boton de menu salga solo en mobiles
*/

let x = window.innerWidth;
if (x >= 570) {
    let a = document.getElementById('toggle-menubar');
    a.classList.replace('display','none');
}
