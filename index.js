const theBody = document.querySelector('body');
        const openNav = document.querySelector('.menu-bar-button');
        const closeNav = document.querySelector('.close-nav-button');
        const navbar = document.querySelector('.navbar');

        function showHide(){
            navbar.classList.toggle('show');
            // bodyScroll();
        }

        openNav.onclick = showHide;
        closeNav.onclick = showHide;