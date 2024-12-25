var klaroConfig = {
  elementID: 'klaro', // ID kontenera dla banera
  version: 1, // Wersja konfiguracji
  cookieName: 'klaro-consent', // Nazwa cookie przechowującego zgodę
  privacyPolicy: '/privacy-policy', // Link do polityki prywatności
  position: 'bottom', // Pozycja banera: 'bottom' dla dolnej części strony
  hideFromLocalStorage: false, // Domyślnie, Klaro przechowuje stan w localStorage, ale możesz to wyłączyć
  default: false, // Domyślna konfiguracja: wszystkie zgody są odmówione
  buttons: {
    acceptAll: {
      text: 'Akceptuj wszystkie', // Tekst przycisku "Akceptuj wszystkie"
      callback: function() {
        klaro.acceptAll(); // Akceptacja wszystkich zgód
      }
    },
    preferences: {
      text: 'Wybierz ustawienia', // Tekst przycisku "Wybierz ustawienia"
      callback: function() {
        klaro.show(); // Pokazuje interfejs, gdzie użytkownik może wybrać poszczególne zgody
      }
    }
  },
  apps: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['_ga', '_gid'], // Przykładowe pliki cookie używane przez Google Analytics
      required: false, // Google Analytics nie jest obowiązkowe
    },
    {
      name: 'facebook-pixel',
      title: 'Facebook Pixel',
      purposes: ['analytics'],
      cookies: ['_fbp'], // Przykładowy plik cookie Facebook Pixel
      required: false,
    }
    // Dodaj inne aplikacje wg potrzeb
  ]
};
