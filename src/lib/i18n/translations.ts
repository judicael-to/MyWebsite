type TranslationKey = 
  | 'theme.dark'
  | 'theme.light'
  | 'contact.title'
  | 'contact.details'
  | 'contact.socials'
  | 'intro.greeting'
  | 'intro.role'
  | 'intro.description'
  | 'about.title'
  | 'about.tools'
  | 'about.passions'
  | 'about.passions.coding'
  | 'about.passions.design'
  | 'about.passions.tennis'
  | 'about.passions.music';

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
    'intro.greeting': 'Hi, I am Judicael',
    'intro.role': 'Full Stack Developer',
    'intro.description': 'Passionate about creating innovative solutions and building amazing web experiences.',
    'about.title': 'About me',
    'about.tools': 'My primary tools',
    'about.passions': 'My passions',
    'about.passions.coding': 'Coding',
    'about.passions.design': 'Design',
    'about.passions.tennis': 'Tennis',
    'about.passions.music': 'Music'
  },
  fr: {
    'theme.dark': 'Sombre',
    'theme.light': 'Clair',
    'contact.title': 'Parlons ensemble !',
    'contact.details': 'Coordonnées',
    'contact.socials': 'Réseaux',
    'intro.greeting': 'Salut, je suis Judicael',
    'intro.role': 'Développeur Full Stack',
    'intro.description': 'Passionné par la création de solutions innovantes et la construction d\'expériences web exceptionnelles.',
    'about.title': 'À propos de moi',
    'about.tools': 'Mes outils principaux',
    'about.passions': 'Mes passions',
    'about.passions.coding': 'Codage',
    'about.passions.design': 'Design',
    'about.passions.tennis': 'Tennis',
    'about.passions.music': 'Musique'
  }
};

export function getTranslation(key: TranslationKey, lang: string = 'fr'): string {
  const language = translations[lang] || translations.fr;
  return language[key] || translations.fr[key];
} 