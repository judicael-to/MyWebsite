export type TranslationKey = 
  | 'theme.dark'
  | 'theme.light'
  | 'contact.title'
  | 'contact.details'
  | 'contact.socials'
  | 'intro.greeting'
  | 'intro.description'
  | 'about.title'
  | 'about.tools'
  | 'about.passions'
  | 'about.passions.coding'
  | 'about.passions.design'
  | 'about.passions.tennis'
  | 'about.passions.music'
  | 'blog.title'
  | 'birthday.countdown'
  | 'welcome'
  | 'intro.title'
  | 'intro.subtitle'
  | 'contact.form.title'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.subject'
  | 'contact.form.message'
  | 'contact.form.submit'
  | 'contact.form.success'
  | 'contact.form.error';

type Translations = {
  [key in TranslationKey]: string;
};

type Languages = {
  [key: string]: Translations;
};

export const translations: Languages = {
  en: {
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'contact.title': "Let's talk together!",
    'contact.details': 'Contact Details',
    'contact.socials': 'Socials',
    'intro.greeting': 'Hi, I am',
    'intro.description': 'Passionate about creating innovative solutions and building amazing web experiences.',
    'about.title': 'About me',
    'about.tools': 'My primary tools',
    'about.passions': 'My passions',
    'about.passions.coding': 'Coding',
    'about.passions.design': 'Design',
    'about.passions.tennis': 'Tennis',
    'about.passions.music': 'Music',
    'blog.title': 'My Blog',
    'birthday.countdown': 'Time before my birthday:',
    'welcome': 'WELCOME.',
    'intro.title': 'Introduction',
    'intro.subtitle': 'Subtitle',
    'contact.form.title': 'Contact Me',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'An error occurred. Please try again.'
  },
  fr: {
    'theme.dark': 'Sombre',
    'theme.light': 'Clair',
    'contact.title': 'Parlons ensemble !',
    'contact.details': 'Coordonnées',
    'contact.socials': 'Réseaux',
    'intro.greeting': 'Salut, je suis',
    'intro.description': 'Passionné par la création de solutions innovantes et la construction d\'expériences web exceptionnelles.',
    'about.title': 'À propos de moi',
    'about.tools': 'Mes outils principaux',
    'about.passions': 'Mes passions',
    'about.passions.coding': 'Codage',
    'about.passions.design': 'Design',
    'about.passions.tennis': 'Tennis',
    'about.passions.music': 'Musique',
    'blog.title': 'Mon Blog',
    'birthday.countdown': 'Temps avant mon anniversaire :',
    'welcome': 'BIENVENUE.',
    'intro.title': 'Introduction',
    'intro.subtitle': 'Sous-titre',
    'contact.form.title': 'Contactez-moi',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Une erreur est survenue. Veuillez réessayer.'
  }
};

export function getTranslation(key: TranslationKey, lang: string = 'fr'): string {
  try {
    const language = translations[lang] || translations.fr;
    const translation = language[key];
    if (!translation) {
      console.warn(`Missing translation for key "${key}" in language "${lang}"`);
      return translations.fr[key] || key;
    }
    return translation;
  } catch (error) {
    console.error(`Error getting translation for key "${key}" in language "${lang}":`, error);
    return key;
  }
} 