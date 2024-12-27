var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro',
    privacyPolicy: '/privacy-policy.html',
    lang: 'en',
    translations: {
        en: {
            consentModal: {
                title: 'Privacy Settings',
                description: 'We use cookies to improve your experience on our site.',
            },
            purposes: {
                analytics: 'Analytics',
                essential: 'Essential',
            },
        },
    },
    apps: [
        {
            name: 'gtm',
            title: 'Google Tag Manager',
            purposes: ['essential'],
            required: true,
            optOut: false,
        },
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: ['_ga', '_gid', '_gat'],
        },
    ],
};

klaro.start(klaroConfig);
