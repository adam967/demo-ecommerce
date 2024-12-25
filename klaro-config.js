var klaroConfig = {
    testing: false,
    elementID: 'klaro',
    storageMethod: 'cookie',
    storageName: 'klaro',
    htmlTexts: false,
    cookieDomain: '.example.com',
    cookieExpiresAfterDays: 30,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    translations: {
        zz: {
            privacyPolicyUrl: '/privacy',
            consentNotice: {
                description: 'We use cookies to improve your experience. Please give your consent to continue.',
            },
            consentModal: {
                description: 'Here you can see and customize the information that we collect about you.',
            },
            purposes: {
                analytics: {
                    title: 'Analytics'
                },
                security: {
                    title: 'Security'
                },
                livechat: {
                    title: 'Live Chat'
                },
                advertising: {
                    title: 'Advertising'
                },
                styling: {
                    title: 'Styling'
                },
            },
        },
        en: {
            privacyPolicyUrl: '/privacy',
            consentModal: {
                description: 'Here you can see and customize the information that we collect about you.',
            },
            purposes: {
                analytics: {
                    title: 'Analytics'
                },
                security: {
                    title: 'Security'
                },
                livechat: {
                    title: 'Live Chat'
                },
                advertising: {
                    title: 'Advertising'
                },
                styling: {
                    title: 'Styling'
                },
            },
        },
    },

    services: [
        {
            name: 'gtm',
            required: true,
            default: true,
            translations: {
                zz: {
                    title: 'Google Tag Manager'
                },
                en: {
                    description: 'Used for managing tags and other analytics services.'
                },
            },
            purposes: ['analytics'],
            cookies: [
                'gtm_auth',
                'gtm_debug',
                'gtm_preview',
                'gtm_load',
            ],
            callback: function(consent, service) {
                console.log('User consent for service ' + service.name + ': consent=' + consent);
            },
        },
        {
            name: 'ga4',
            default: false,
            translations: {
                zz: {
                    title: 'Google Analytics 4'
                },
                en: {
                    description: 'Google Analytics is used for tracking and analyzing website traffic.'
                },
            },
            purposes: ['analytics'],
            cookies: [
                '_ga',
                '_gid',
                '_gat',
            ],
            callback: function(consent, service) {
                console.log('User consent for service ' + service.name + ': consent=' + consent);
            },
        },
    ],

    callback: function(consent, service) {
        console.log('User consent for service ' + service.name + ': consent=' + consent);
    },
};
