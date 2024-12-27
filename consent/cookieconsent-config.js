CookieConsent.run({
    disablePageInteraction: true,

    cookie: {
        name: 'cc_cookie',
    },

    guiOptions: {
        consentModal: {
            layout: 'cloud inline',
            position: 'middle center',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie);
        
        // Sprawdzamy, jakie usługi są zaakceptowane
        const adsGranted = cookie.services.ads && cookie.services.ads.length > 0 ? 'granted' : 'denied';
        const analyticsGranted = cookie.services.analytics && cookie.services.analytics.length > 0 ? 'granted' : 'denied';

        console.log('ads consent:', adsGranted);
        console.log('analytics consent:', analyticsGranted);

        // Pushujemy dane do GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'consentUpdate',
            'adsConsent': adsGranted,
            'analyticsConsent': analyticsGranted
        });
    },

    onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);

        if (changedCategories.indexOf('ads') !== -1) {
            const adsGranted = changedServices.ads && changedServices.ads.length > 0 ? 'granted' : 'denied';
            console.log('ads consent changed to:', adsGranted);
            
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'consentUpdate',
                'adsConsent': adsGranted
            });
        }

        if (changedCategories.indexOf('analytics') !== -1) {
            const analyticsGranted = changedServices.analytics && changedServices.analytics.length > 0 ? 'granted' : 'denied';
            console.log('analytics consent changed to:', analyticsGranted);

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'consentUpdate',
                'analyticsConsent': analyticsGranted
            });
        }
    },

    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {
            autoClear: {
                cookies: [
                    { name: /^_ga/ },
                    { name: '_gid' }
                ]
            },
            services: {
                ga: {
                    label: 'Google Analytics',
                    onAccept: () => {},
                    onReject: () => {}
                },
            }
        },
        ads: {}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'Lorem ipsum dolor sit amet...',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences',
                    footer: `
                        <a href="#path-to-impressum.html" target="_blank">Impressum</a>
                        <a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
                    `,
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    serviceCounterLabel: 'Service|Services',
                    sections: [
                        {
                            title: 'Your Privacy Choices',
                            description: `You can express preferences regarding personal information processing here.`,
                        },
                        {
                            title: 'Strictly Necessary',
                            description: 'These cookies are essential.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information...',
                            linkedCategory: 'analytics',
                        },
                        {
                            title: 'Targeting and Advertising',
                            description: 'These cookies are used for advertising.',
                            linkedCategory: 'ads',
                        }
                    ]
                }
            }
        }
    }
});
