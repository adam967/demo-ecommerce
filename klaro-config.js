var klaroConfig = {
  elementID: 'klaro', // ID elementu, w którym będzie działał Klaro
  version: 1, // Wersja konfiguracji
  cookieName: 'klaro-consent', // Nazwa pliku cookie przechowującego preferencje
  privacyPolicy: '/privacy-policy', // Link do polityki prywatności
  default: false, // Czy wszystkie usługi są domyślnie włączone
  apps: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['_ga', '_gid'], // Nazwy plików cookie związanych z usługą
      required: false, // Czy zgoda jest wymagana
    },
  ],
};
