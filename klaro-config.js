window.klaroConfig = {
  elementID: "cookie-banner",
  privacyPolicy: "/privacy-policy",  // Jeśli masz stronę z polityką prywatności
  translations: {
    en: {
      consentModal: {
        title: "We use cookies!",
        description: "We use cookies to improve your experience. By using this site, you agree to our use of cookies.",
        acceptAll: "Accept All",
        settings: "Settings",
        necessary: "Necessary cookies",
        optional: "Optional cookies"
      },
      settings: {
        title: "Cookie Settings",
        save: "Save settings",
        cancel: "Cancel"
      }
    }
  },
  services: [
    {
      name: "gtm",
      purpose: "Essential: Google Tag Manager",
      required: true,
      optOut: false,
      cookies: []
    },
    {
      name: "google_analytics",
      purpose: "Google Analytics",
      required: false,
      optOut: true,
      cookies: ["_ga", "_gid"]
    }
  ]
};
klaro.run();
