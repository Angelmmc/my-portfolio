document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleDark = document.getElementById('toggleDark');
    const toggleDarkMobile = document.getElementById('toggleDark-mobile');

    // Toggle menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // Función para alternar dark mode
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        // Aquí puedes agregar lógica para guardar la preferencia en localStorage
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark.toString());
    }

    // Event listeners para dark mode
    if (toggleDark) {
        toggleDark.addEventListener('click', toggleDarkMode);
    }
    if (toggleDarkMobile) {
        toggleDarkMobile.addEventListener('click', toggleDarkMode);
    }

    // Cargar preferencia de dark mode
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.documentElement.classList.add('dark');
    }

    // Cerrar menú móvil al hacer clic en un enlace
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (mobileMenu) {
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    }

    // Cerrar menú móvil al redimensionar la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 640) { // sm breakpoint
          if (mobileMenu) {
            mobileMenu.classList.add('hidden');
          }
        }
    });
});