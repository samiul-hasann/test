function initializeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const menuToggle = document.getElementById('menu-toggle-sidebar');
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');

    if (menuToggle && sidebar && mainContent) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        mainContent.classList.toggle('expanded');
      });
    }

    sidebarIcons.forEach(icon => {
      icon.addEventListener('click', (e) => {
        // Prevent genre click from setting active state if it's just for dropdown
        if (e.currentTarget.classList.contains('genre-toggle')) return;

        if (icon.closest('.sidebar')) {
          sidebarIcons.forEach(item => {
            if (item.closest('.sidebar')) {
              item.classList.remove('active');
            }
          });
          icon.classList.add('active');
        }
      });
    });

    // Set the first relevant sidebar icon (Home) as active on load for desktop sidebar
    const homeIcon = document.querySelector('.sidebar .fa-home');
    if (homeIcon) {
      homeIcon.closest('.sidebar-icon').classList.add('active');
    }

    // Mobile Sidebar Logic
    const menuIcon = document.getElementById("menu-icon");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const genre = document.getElementById("genre");

    if (menuIcon && mobileSidebar && sidebarOverlay) {
        menuIcon.addEventListener("click", () => {
            mobileSidebar.classList.toggle("open");
            sidebarOverlay.classList.toggle("visible");
        });

        sidebarOverlay.addEventListener("click", () => {
            mobileSidebar.classList.remove("open");
            sidebarOverlay.classList.remove("visible");
        });
    }

    if (genre) {
        genre.addEventListener("click", (e) => {
            // Check if the click is on the genre text itself, not a sub-item
            if (e.target.closest('a').parentElement.id === 'genre') {
              e.preventDefault();
              genre.classList.toggle("open");
            }
        });
    }

    document.addEventListener("click", (e) => {
        if (mobileSidebar && menuIcon && sidebarOverlay) {
            if (mobileSidebar.classList.contains("open") && !mobileSidebar.contains(e.target) && !menuIcon.contains(e.target)) {
                mobileSidebar.classList.remove("open");
                sidebarOverlay.classList.remove("visible");
            }
        }
    });
}
