export function setupContactFormListeners() {
  const contactForm = document.querySelector('.contact-form-card');

  if (contactForm) {
    window.addEventListener('showContactForm', () => {
      setTimeout(() => {
        contactForm.classList.add('show');
      }, 1000);
    });

    window.addEventListener('hideContactForm', () => {
      contactForm.classList.remove('show');
    });
  }
}
