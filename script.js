function aparecerMenu() {
    let menu_oculto = document.querySelector('div#menu-oculto')
    if (menu_oculto.style.display === 'block') {
        menu_oculto.style.display = 'none'
    } else {
        menu_oculto.style.display = 'block'
    }
}