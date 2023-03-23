window.addEventListener('scroll' , () => {
    const menuHelp = document.querySelector('.menu__help');
    const menuMain = document.querySelector('.menu__main')
    menuHelp.classList.toggle('hiddenMenuHelp', window.scrollY > 0);
    menuMain.classList.toggle('mt-3', window.scrollY == 0);
});
