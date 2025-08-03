document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const toggleDark = document.getElementById('toggleDark');
  const toggleDarkMobile = document.getElementById('toggleDark-mobile');

  const proyectos = document.querySelectorAll('#proyectos .group');
  let tocadoActual: Element | null = null;

  const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
  </svg>
  `;

  const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
</svg>
`;

  // Toggle menú móvil
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
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
    updateDarkIcons();
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

  updateDarkIcons();

  // Cerrar menú móvil al hacer clic en un enlace
  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (mobileMenu) {
          if (mobileMenu) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
  }

  // Actualizar iconos de dark mode
  function updateDarkIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    if (toggleDark) toggleDark.innerHTML = isDark ? sunIcon : moonIcon;
    if (toggleDarkMobile) toggleDarkMobile.innerHTML = isDark ? sunIcon : moonIcon;
  }


  // Cerrar menú móvil al redimensionar la ventana
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 640) { // sm breakpoint
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    }
  });

  // Manejo de clics en tarjetas de proyectos
  proyectos.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (tocadoActual !== card) {
        e.preventDefault();
        tocadoActual = card;

        // Reiniciar otras
        proyectos.forEach((p) => {
          if (p !== card) {
            p.classList.remove('hover');
          }
        });

        card.classList.add('hover');

        // Reset después de 3s si no se hace clic otra vez
        setTimeout(() => {
          if (tocadoActual === card) {
            card.classList.remove('hover');
            tocadoActual = null;
          }
        }, 3000);
      } else {
        const url = (card as HTMLElement).dataset.link;
        if (url) window.open(url, '_blank');
        tocadoActual = null;
      }
    });
  });


});