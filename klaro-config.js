var klaroConfig = {
  // Inne ustawienia Klaro, które już masz
  debug: true,  // Włącza tryb debugowania (pomocne przy szukaniu błędów)

  // Ustawienia przycisków
  buttons: {
    acceptAll: {
      text: "That's Ok",  // Tekst na przycisku "Zaakceptuj wszystkie"
      callback: function() {
        klaro.acceptAll();  // Funkcja akceptująca wszystkie zgody
      }
    },
    preferences: {
      text: "Wybierz ustawienia",  // Tekst na przycisku "Preferencje"
      callback: function() {
        klaro.show();  // Pokazuje okno z ustawieniami preferencji
      }
    }
  },

  // Ustawienia dla narzędzi i zgód (przykładowe)
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
