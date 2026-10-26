/**
 * PORTFOLIO SCRIPTS — MARLON FERREIRA
 * Inspirado na experiência interativa de tamalsen.dev
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initNavigation();
  initProjectFilter();
  initEmailCopy();
  initBackToTop();
  initScrollAnimations();
});

/**
 * 1. CURSOR SEGUIDOR PERSONALIZADO (ASSINATURA TAMAL SEN)
 */
function initCustomCursor() {
  const outerCursor = document.querySelector('.circle-cursor--outer');
  const innerCursor = document.querySelector('.circle-cursor--inner');

  if (!outerCursor || !innerCursor) return;

  // Se o dispositivo for touch, encerra o cursor
  if (window.matchMedia('(pointer: coarse)').matches) {
    outerCursor.style.display = 'none';
    innerCursor.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let outerX = 0, outerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    innerCursor.style.left = `${mouseX}px`;
    innerCursor.style.top = `${mouseY}px`;
  });

  // Loop suave para o anel externo com interpolação
  function animateOuterCursor() {
    outerX += (mouseX - outerX) * 0.18;
    outerY += (mouseY - outerY) * 0.18;

    outerCursor.style.left = `${outerX}px`;
    outerCursor.style.top = `${outerY}px`;

    requestAnimationFrame(animateOuterCursor);
  }
  requestAnimationFrame(animateOuterCursor);

  // Efeito ao pairar sobre links e botões interativos
  const interactiveElements = document.querySelectorAll('a, button, .project-preview, .repo-card, .filter-btn, .skill-category-card');

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // Ocultar quando sair da janela
  document.addEventListener('mouseleave', () => {
    outerCursor.style.opacity = '0';
    innerCursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    outerCursor.style.opacity = '1';
    innerCursor.style.opacity = '1';
  });
}

/**
 * 2. NAVEGAÇÃO, SCROLLSPY & MENU MOBILE
 */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navMenu = document.querySelector('.nav-menu');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Toggle Mobile
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Fechar ao clicar em um link
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

  // ScrollSpy para destacar item ativo no menu
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;

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
  });
}

/**
 * 3. FILTRO DE PROJETOS COMPLEMENTARES
 */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const repoCards = document.querySelectorAll('.repo-card');

  if (!filterBtns.length || !repoCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      repoCards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/**
 * 4. COPIAR E-MAIL COM TOAST NOTIFICATION
 */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailAddressText');
  const toast = document.getElementById('toastNotice');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', () => {
    const email = emailText.textContent.trim();

    navigator.clipboard.writeText(email).then(() => {
      showToast('E-mail copiado para a área de transferência!');
      copyBtn.innerHTML = '<i class="fa fa-check"></i> Copiado!';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa fa-clone"></i> Copiar';
      }, 2500);
    }).catch(() => {
      showToast('Erro ao copiar e-mail. Utilize Ctrl+C.');
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
 * 5. BOTÃO VOLTAR AO TOPO
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 6. REVEAL / INTERSECTION OBSERVER ANIMATIONS
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.project-item, .repo-card, .skill-category-card, .timeline-item, .testimonial-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });

  // Handler para itens que entram em visão
  document.addEventListener('scroll', () => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.88) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }, { passive: true });
}
