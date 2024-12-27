window.klaroConfig = {
  elementID: 'klaro-consent', // Identyfikator elementu
  privacyPolicy: '/privacy',  // Ścieżka do polityki prywatności
  lang: 'en', // Język pop-upu
  translations: {
    en: {
      consentModal: {
        title: 'We value your privacy!',
        description: 'Customize your consent preferences.',
      },
    },
  },
  services: [ // Definiowanie usług
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'], // Cel: analiza
      cookies: ['_ga', '_gid'], // Używane ciasteczka
      default: false,  // Brak domyślnej zgody
    },
    // Możesz dodać inne usługi w podobny sposób
  ],
};

document.addEventListener('DOMContentLoaded', function () {
  klaro.setup(window.klaroConfig); // Inicjalizacja Klaro
});
