function toggleBurgerMenu () {
    document.querySelector('.js--burger_menu_btn').addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('toggle');
        document.querySelector('.js--burger_menu').classList.toggle('open');
    });
}

toggleBurgerMenu();
