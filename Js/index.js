var ElementDuvidas = document.querySelectorAll('.duvida')

ElementDuvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})