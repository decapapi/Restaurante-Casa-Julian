window.addEventListener("scroll", function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add("menu-nav");
    } else {
        navbar.classList.remove("menu-nav");
    }
});

function guardarCategoria(categoria) {
    localStorage.setItem('categoria', categoria);
}

function recuperarCategoria() {
    var categoria = localStorage.getItem('categoria');
    if (categoria != null)
        mostrarCategoria(categoria);
}
recuperarCategoria();

function mostrarCategoria(categoria) {
    var elementos = document.getElementsByClassName('categoria-carta');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove('activo');
    }
    document.getElementById(categoria).classList.add('activo');
    guardarCategoria(categoria);
}
