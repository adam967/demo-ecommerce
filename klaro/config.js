// Ustawienie konfiguracji Klaro
window.klaroConfig = {
  elementID: 'klaro-consent', // Element ID dla okna zgody
  privacyPolicy: '/privacy',  // Link do polityki prywatności
  lang: 'en',                 // Ustawienie języka
  translations: {
    en: {
      consentModal: {
        title: 'We value your privacy!',
        description: 'Please accept or customize your consent preferences.',
      },
      actions: {
        consent: 'That\'s OK',
        customize: 'Customize',
      },
    },
  },
  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['_ga', '_gid'],
      default: false,  // Zgoda domyślnie ustawiona na "nie"
    },
  ],
  onConsentGiven: function(consents) {
    console.log('Consent given:', consents);
    // Możesz tu sprawdzić, jakie zgody zostały udzielone
    if (consents.googleAnalytics) {
      console.log('Google Analytics consent given');
    }
  },
};

// Inicjalizacja Klaro po załadowaniu strony
document.addEventListener('DOMContentLoaded', function () {
  klaro.setup(window.klaroConfig);
});
