$(document).ready(function () {
    function fetchMenu() {
        return new Promise((resolve, reject) => {
            $.getJSON('./assets/data/carta.json', function (data) {
                resolve(data);
            })
            .fail(function (jqxhr, textStatus, error) {
                reject(error);
            });
        });
    }

    function populateCategorySection(category, sectionElement) {
        category.forEach(item => {
            const menuItem = $('<div class="elemento-carta"></div>');
            menuItem.html(`
                <div class="imagen-carta">
                    <img src="${item.imagen}" alt="${item.nombre}">
                </div>
                <div class="descripcion">
                    <h2>${item.nombre}</h2>
                    <p>${item.descripcion}</p>
                    <p class="precio">${item.precio}</p>
                </div>
            `);
            sectionElement.append(menuItem);
        });
    }

    fetchMenu()
        .then(menu => {
            populateCategorySection(menu.entrantes, $('#seccion-entrantes'));
            populateCategorySection(menu.carnes, $('#seccion-carnes'));
            populateCategorySection(menu.pescados, $('#seccion-pescados'));
            populateCategorySection(menu.arroces, $('#seccion-arroces'));
        })
        .catch(error => console.error('Error loading menu:', error));
});
