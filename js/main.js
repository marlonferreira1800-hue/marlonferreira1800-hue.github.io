/**
 * PORTFOLIO SCRIPTS — MARLON FERREIRA
 * Wondering.app & MedAsclepio Design System
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initProjectFilter();
  initEmailCopy();
  initScrollAnimations();
});

/**
 * 1. THEME SWITCHER (WONDERING WARM LIGHT / ESPRESSO DARK)
 */
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const htmlEl = document.documentElement;

  // Carregar tema salvo ou manter padrão claro
  const savedTheme = localStorage.getItem('mf_theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('mf_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeBtn) return;
    const icon = themeBtn.querySelector('i');
    if (icon) {
      if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
        themeBtn.setAttribute('title', 'Alternar para Modo Claro');
      } else {
        icon.className = 'fa-solid fa-moon';
        themeBtn.setAttribute('title', 'Alternar para Modo Escuro');
      }
    }
  }
}

/**
 * 2. NAVEGAÇÃO & MENU MOBILE
 */
function initNavigation() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // ScrollSpy
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 220;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * 3. FILTRO DE REPOSITÓRIOS WONDERING
 */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn-wondering');
  const repoCards = document.querySelectorAll('.repo-card-wondering');

  if (!filterBtns.length || !repoCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      repoCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';

        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * 4. COPIAR E-MAIL COM TOAST
 */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailAddressText');
  const toast = document.getElementById('toastNotice');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', () => {
    const email = emailText.textContent.trim();

    navigator.clipboard.writeText(email).then(() => {
      showToast('✦ E-mail copiado para a área de transferência!');
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-regular fa-clone"></i> Copiar';
      }, 2500);
    }).catch(() => {
      showToast('Erro ao copiar. Selecione o texto e copie manualmente.');
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/**
 * 5. REVEAL SCROLL ANIMATIONS
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.wondering-project-card, .repo-card-wondering, .skill-card-wondering, .timeline-entry');

  elements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  function checkScroll() {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}
