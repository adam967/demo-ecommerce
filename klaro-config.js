var klaroConfig = {
  // Inne ustawienia Klaro

  // Konfiguracja banera
  bannerPosition: 'fixed',  // Ustawienie banera na 'fixed', czyli w stałej pozycji
  bannerSize: 'fullscreen',  // Ustawienie pełnoekranowego banera
  allowDecline: false,  // Wyłączenie przycisku zamknięcia ('X') - nie można zamknąć bez akceptacji

  // Przyciski
  buttons: {
    acceptAll: {
      text: "That's Ok",  // Tekst na przycisku 'Zaakceptuj wszystkie'
      callback: function() {
        klaro.acceptAll();  // Akceptuje wszystkie zgody
      }
    },
    preferences: {
      text: "Wybierz ustawienia",  // Tekst na przycisku 'Preferencje'
      callback: function() {
        klaro.show();  // Pokazuje okno z ustawieniami preferencji
      }
    }
  },

  // Przykładowe cele zgód
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

// Uruchomienie Klaro z powyższą konfiguracją
klaro.run(klaroConfig);
