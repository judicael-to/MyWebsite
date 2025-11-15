import { getTranslation } from "../lib/i18n/translations";

export function updateTranslations(lang: string) {
  const blogTitle = document.querySelector('.blog-title');
  
  if (blogTitle) {
    blogTitle.textContent = getTranslation('blog.title', lang);
  }
}

export function setupLanguageChangeListener() {
  window.addEventListener('languagechange', (event) => {
    const lang = (event as CustomEvent).detail.language;
    updateTranslations(lang);
  });

  document.addEventListener('astro:page-load', () => {
    const lang = document.documentElement.lang || 'fr';
    updateTranslations(lang);
  });
}