export default {
    oidc: {
        issuer: 'https://dev-81535986.okta.com/oauth2/default',
        clientId: '0oa5se2c6gLXwYT2S5d7',
        scopes: ['openid', 'profile', 'email'],
        redirectUri: `http://localhost:3000/login/callback` || `https://yellow-sea-0fa5a340f.1.azurestaticapps.net/login/callback`
    },
    widget: {
        issuer: 'https://dev-81535986.okta.com/oauth2/default',
        clientId: '0oa5se2c6gLXwYT2S5d7',
        redirectUri: `http://localhost:3000/login/callback` || `https://yellow-sea-0fa5a340f.1.azurestaticapps.net/login/callback`,
        scopes: ['openid', 'profile', 'email'],
        useInteractionCodeFlow: false
    }
};