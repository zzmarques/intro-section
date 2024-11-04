const wv = window.innerWidth;
const img = document.querySelector('img.hero-img');

wv <= 1024 ? img.src = 'src/assets/images/image-hero-mobile.png'  : img.src = 'src/assets/images/image-hero-desktop.png';

const menu = () => {
    const btnShow = document.querySelector('div.menu');
    const navBar = document.querySelector('nav.navbar');
    const btnClose = document.querySelector('div.btn-close');

    const menuShow = () => {
        navBar.style.display = 'block';
    }

    const menuClose = () => {
         navBar.style.display = 'none';
    }

    btnShow.addEventListener('click', menuShow);
    btnClose.addEventListener('click', menuClose);
    
}

menu();

const dropDrown = () => {
    const btnDrop = document.querySelectorAll('li.item-dropdown');
    const ulDropDown = document.querySelectorAll('ul.ul-dropdown');
    const links = document.querySelectorAll('li.item-drop');
    const img = document.querySelector('li.item-dropdown img.img-drop');

    const showDrop = (i) => {

        if(ulDropDown[i].style.display === 'flex') {
            img.src = 'src/assets/images/icon-arrow-down.svg';
            ulDropDown[i].style.display = 'none';
        } else {
            img.src = 'src/assets/images/icon-arrow-up.svg';
            ulDropDown[i].style.display = 'flex';
        }
    }

    btnDrop.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            showDrop(i)
        });
    });

    links.forEach(btns => {
        btns.addEventListener('click', () => {
            if(ulDropDown[0].style.display === 'flex' || ulDropDown[1].style.display === 'flex') {
                img.src = 'src/assets/images/icon-arrow-down.svg';
                ulDropDown[i].style.display = 'none';
            }
        });
    });
}

dropDrown();