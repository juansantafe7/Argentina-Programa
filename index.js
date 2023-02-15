/*
Seleccionamos el header y lo guardamos en una variable, luego con un escuchador de eventos
hacemos que cuando el usuario haga un scroll verticalmente cambie la clase del header a
sticky
*/

const cabecera = document.querySelector('header');

window.addEventListener('scroll', function(){

    cabecera.classList.toggle('sticky', window.scrollY > 0);

});
    
/*
Utilizamos querySelector para seleccionar el icono del menú y los enlaces de la lista de
navegación. Luego agregamos una función anónima en al cual al hacer click sobre el menú 
abrirá el contenido del mismo (es decir los enlaces de la lista de navegación que por defecto
están ocultos al utilizar la propiedad display: none en CSS)
*/

let menu = document.querySelector('#menu-icono');

let navegacion = document.querySelector('.lista-navegacion');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navegacion.classList.toggle('active');


}

/*
Utilizamos una función anónima que al realizar un scroll el menú se ocultará de la pantalla
*/

window.onscroll = () => {

    menu.classList.remove('bx-x');
    navegacion.classList.remove('active');


}

/*
Utilizamos la librería ScrollReveal y la guardamos en una constante llamada sr. Esta librería
nos permite agregar efectos a nuestro sitio web cuando el usuario realice un scroll en la
página. En nuestro caso agregamos un pequeño delay de milisegundos.
*/

const sr = ScrollReveal ({

    distance: '45px',
    duration: 2700,
    reset: true

});

sr.reveal('.principal-texto',{delay: 350, origin: 'left'});

sr.reveal('.principal-imagen',{delay: 350, origin: 'right'});

sr.reveal('.servicios, .sobre-mi, .portafolio, .contacto',{delay: 200, origin: 'bottom'});


