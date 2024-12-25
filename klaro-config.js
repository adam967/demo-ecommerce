var klaroConfig = {
  elementID: 'klaro', // ID elementu, w którym będzie wyświetlany baner
  version: 1, // Wersja konfiguracji
  cookieName: 'klaro-consent', // Nazwa cookie przechowującego zgodę
  privacyPolicy: '/privacy-policy', // Link do polityki prywatności
  default: false, // Domyślna konfiguracja - usługi nieaktywne
  position: 'bottom', // Miejsce wyświetlania banera (góra/dół)
  buttons: {
    acceptAll: {
      text: 'Akceptuj wszystkie', // Tekst przycisku "Akceptuj wszystkie"
      callback: function() {
        klaro.acceptAll(); // Funkcja akceptująca wszystkie zgody
      }
    },
    preferences: {
      text: 'Wybierz ustawienia', // Tekst przycisku "Wybierz ustawienia"
      callback: function() {
        klaro.show(); // Funkcja wyświetlająca panel wyboru
      }
    }
  },
  apps: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['_ga', '_gid'], // Pliki cookie
      required: false, // Czy zgoda jest wymagana
    },
    {
      name: 'facebook-pixel',
      title: 'Facebook Pixel',
      purposes: ['analytics'],
      cookies: ['_fbp'],
      required: false,
    },
    // Dodaj inne aplikacje wg potrzeb
  ]
};
