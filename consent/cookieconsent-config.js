/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    disablePageInteraction: true,
    revision: 1,

    cookie: {
        name: 'cc_cookie',
        // domain: location.hostname,
        // path: '/',
        // sameSite: "Lax",
        // expiresAfterDays: 365,
    },

    guiOptions: {
        consentModal: {
            layout: 'box',
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

    onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired', cookie);
        updateCookies(cookie); // Funkcja, która aktualizuje cookie w czasie rzeczywistym
    },

    onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie);
        updateCookies(cookie); // Funkcja, która aktualizuje cookie w czasie rzeczywistym
    },

    onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);

        // Zaktualizuj zgody w cookies
        var cookie = getCookie('cc_cookie');
        try {
            var parsedCookie = JSON.parse(cookie);
            if (changedCategories) {
                if (changedCategories.ads) {
                    parsedCookie.categories.ads = changedCategories.ads === 'granted';
                }
                if (changedCategories.analytics) {
                    parsedCookie.categories.analytics = changedCategories.analytics === 'granted';
                }
            }
            updateCookies(parsedCookie); // Funkcja, która zapisuje zmodyfikowane cookie
        } catch (e) {
            console.error('Error updating cookie consent:', e);
        }
    },

    onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
    },

    onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
    },

    onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
    },

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {
            autoClear: {
                cookies: [
                    { name: /^_ga/ },   // regex: match all cookies starting with '_ga'
                    { name: '_gid' }    // string: exact cookie name
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
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
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
                            description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
                        },
                        {
                            title: 'Strictly Necessary',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Description'
                                },
                                body: [
                                    { name: '_ga', domain: location.hostname, desc: 'Description 1' },
                                    { name: '_gid', domain: location.hostname, desc: 'Description 2' }
                                ]
                            }
                        },
                        {
                            title: 'Targeting and Advertising',
                            description: 'These cookies are used to make advertising messages more relevant to you and your interests.',
                            linkedCategory: 'ads',
                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                        }
                    ]
                }
            }
        }
    }
});

/**
 * Funkcja aktualizująca cookie w czasie rzeczywistym
 * @param {Object} cookie 
 */
function updateCookies(cookie) {
    setCookie('cc_cookie', JSON.stringify(cookie), 365);
    // Po zaktualizowaniu cookie, wyślij do GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'cookieConsentUpdate',
        consent: cookie
    });
}

/**
 * Funkcja do odczytu cookies
 * @param {string} name 
 * @returns {string|null}
 */
function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

/**
 * Funkcja do ustawiania cookies
 * @param {string} name 
 * @param {string} value 
 * @param {number} days 
 */
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
