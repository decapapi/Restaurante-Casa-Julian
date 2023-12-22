window.addEventListener("scroll", function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add("menu-nav");
    } else {
        navbar.classList.remove("menu-nav");
    }
});

function mostrarCategoria(categoria) {
    var elementos = document.getElementsByClassName('categoria-carta');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove('activo');
    }
    document.getElementById(categoria).classList.add('activo');
}
