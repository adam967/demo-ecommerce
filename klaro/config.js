window.klaroConfig = {
  elementID: 'klaro-consent',
  privacyPolicy: '/privacy',
  lang: 'en',
  translations: {
    en: {
      consentModal: {
        title: 'We value your privacy!',
        description: 'Customize your consent preferences.',
      },
    },
  },
  apps: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['_ga', '_gid'],
    },
  ],
};

// Inicjalizacja Klaro
document.addEventListener('DOMContentLoaded', function () {
    klaro(klaroConfig); // Upewnij się, że funkcja jest dostępna
});
