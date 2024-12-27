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
  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['_ga', '_gid'],
      default: false, // Brak domyślnej zgody
    },
  ],
  onConsentGiven: function(consents) {
    console.log('User consented:', consents);
  },
};

document.addEventListener('DOMContentLoaded', function () {
  klaro.setup(window.klaroConfig);
});
