//======MENU=======================================//
let btnNav = document.getElementById('btn-nav');

function toggleMenu () {
    let nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

btnNav.addEventListener('click', toggleMenu);


//========BAG========================================//


let btnBag = document.getElementById('btn-bag');

function toggleBag () {
    let navBag = document.getElementById('nav-bag');
    navBag.classList.toggle('on');
}

btnBag.addEventListener('click', toggleBag);


//==========HIDE BAG====================================//

let btnMenu = document.getElementById('btn-nav');

function hideMenu () {
    let btnNav = document.getElementById('nav-bag');
    btnNav.classList.toggle('hide');
}
btnMenu.addEventListener('click', hideMenu);

//===========SHOW OPTIONS ON FOOTER======================//

function toggleList(id) {
    for (let outroSubmenu of $(`.footer-list:not(#${id})`)) {
        outroSubmenu.classList.remove('showOptions')
    }
    document.getElementById(id).classList.toggle('showOptions')
}
$('.footerTitle').on('click', toggleList);



