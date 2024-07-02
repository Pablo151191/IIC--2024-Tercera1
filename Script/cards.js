console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Ingenieria Industrial",
        "url_image": "./images/ingenieria-industrial.png",
        "desc": "Optimiza procesos, sistemas u organizaciones complejos mediante el desarrollo, la mejora y la implementación de sistemas integrados de personas (recursos humanos), riqueza, conocimiento, información y equipamiento, energía, materiales y procesos.",
        "cta": "Mostrar mas...",
        "link": "./ingenieria-industrial.php"
    },
    {
        "title": "Ingenieria en Sistemas",
        "url_image": "./images/ingenieria sistemas.png",
        "desc": "Revisa minuciosamente los datos para la creación de programas, aplicativos y herramientas que faciliten los procesos empresariales en un entorno de información segura y protegida.",
        "cta": "Mostrar mas...",
        "link": "./ingenieria-sistemas.php"
    },
    {
        "title": "administración",
        "url_image": "./images/administracion.png",
        "desc": "Optimiza procesos, sistemas u organizaciones complejos mediante el desarrollo, la mejora y la implementación de sistemas integrados de personas (recursos humanos), riqueza, conocimiento, información y equipamiento, energía, materiales y procesos.",
        "cta": "Mostrar mas...",
        "link": "./administracion.php"
    }
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            // Llamar a la función
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function(item, index) {
            return (
                `<div class='card-item' id="card-number-${index}">
                    <img src="${item.url_image}" />
                    <div class='card-info'>
                        <p class='card-title'>${item.title}</p>
                        <p class='card-desc'>${item.desc}</p>
                        <a class='card-cta' target='_blank' href='${item.link}'>${item.cta}</a>
                    </div>
                </div>`
            );
        }
    };

    CARD.init();
})();












