var klaroConfig = {
    version: 1, // Zwiększaj numer wersji, aby wymusić aktualizację zgód.
    elementID: 'klaro', // ID elementu DOM, w którym Klaro się renderuje.
    storageMethod: 'localStorage', // Przechowywanie zgód (localStorage lub cookie).
    storageName: 'klaro-consent', // Nazwa klucza zgód w localStorage lub cookie.

    lang: 'pl', // Język interfejsu (np. 'en', 'pl').

    translations: {
        pl: {
            consentModal: {
                title: 'Twoja prywatność',
                description: 'Tutaj możesz zarządzać ustawieniami plików cookie.',
            },
            consentNotice: {
                description: 'Używamy plików cookie do poprawy działania naszej strony.',
                learnMore: 'Dowiedz się więcej',
            },
            acceptAll: 'Zaakceptuj wszystko',
            decline: 'Odrzuć wszystko',
            save: 'Zapisz',
        },
    },

    // Lista usług.
    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            description: 'Używamy Google Analytics do zbierania anonimowych danych o ruchu.',
            purposes: ['analytics'],
            cookies: [/^_ga/, /^_gid/, /^_gat/],
            required: false, // Jeśli true, użytkownik nie może wyłączyć tej usługi.
        },
        {
            name: 'youtube',
            title: 'YouTube',
            description: 'Umożliwia odtwarzanie osadzonych filmów YouTube.',
            purposes: ['video'],
            cookies: [/^VISITOR_INFO1_LIVE/, /^YSC/],
        },
    ],
};
