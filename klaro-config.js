var klaroConfig = {
  bannerPosition: 'fixed',  // Baner na stałe w jednym miejscu
  bannerSize: 'fullscreen',  // Baner pełnoekranowy
  allowDecline: false,  // Brak przycisku zamknięcia (X)

  buttons: {
    acceptAll: {
      text: "That's Ok",
      callback: function() {
        klaro.acceptAll();  // Akceptuj wszystkie zgody
      }
    },
    preferences: {
      text: "Wybierz ustawienia",
      callback: function() {
        klaro.show();  // Pokaż okno ustawień
      }
    }
  },

  purposes: [
    {
      purpose: 'analytics',
      name: 'Google Analytics',
      description: 'We use Google Analytics to improve our website.',
      cookies: ['_ga', '_gid'],
      enabled: false
    },
    {
      purpose: 'marketing',
      name: 'Google Ads',
      description: 'We use Google Ads to show relevant ads.',
      cookies: ['_gcl_au', '_fbp'],
      enabled: false
    }
  ]
};
