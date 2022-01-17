const hamburger = document.getElementById('hamburger');
const sidenav = document.getElementById('sidenav');
const main = document.getElementById('main');

let menuOpen = true;

function openMenu(){
    menuOpen = true;
    sidenav.style.width = '22vw';
    main.style.width = '78vw'
    hamburger.style.width = '0px';
}

function closeMenu(){
    menuOpen = false;
    sidenav.style.width = '0vw';
    main.style.width = '100vw'
    hamburger.style.width = '50px';
}


hamburger.addEventListener('click', function () {
    if (!menuOpen){
        openMenu();
    }

})



main.onclick = function(e){
    if(e.target.id != 'sidenav' && e.target.id != 'hamburger'){
         closeMenu();
    }
}










