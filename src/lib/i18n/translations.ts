type TranslationKey = 
  | 'theme.dark'
  | 'theme.light'
  | 'contact.title'
  | 'contact.details'
  | 'contact.socials'
  | 'intro.greeting'
  | 'intro.role'
  | 'intro.description'
  | 'info.title';

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
    'info.title': 'About me',
    'intro.greeting': 'Hi, I am Judicael',
    'intro.role': 'Full Stack Developer',
    'intro.description': 'Passionate about creating innovative solutions and building amazing web experiences.'
  },
  fr: {
    'theme.dark': 'Sombre',
    'theme.light': 'Clair',
    'contact.title': 'Parlons ensemble !',
    'contact.details': 'Coordonnées',
    'contact.socials': 'Réseaux',
    'info.title': 'À propos de moi',
    'intro.greeting': 'Bonjour, je suis Judicael',
    'intro.role': 'Développeur Full Stack',
    'intro.description': 'Passionné par la création de solutions innovantes et la construction d\'expériences web exceptionnelles.'
  }
};

export function getTranslation(key: TranslationKey, lang: string = 'en'): string {
  const language = translations[lang] || translations.en;
  return language[key] || translations.en[key];
} 