const globalThis = typeof window === 'undefined' ? global : window
console.log("globalThis.projectOverrides",globalThis.projectOverrides)
module.exports = global.Project = {
  api: 'http://localhost:8000/api/v1/', //FLAGSMITH_PROXY_API_URL
  // api:'http://localhost:8006/api/v1',
  chargebee: {
    site: 'flagsmith-test',
  },

  debug: false,

  env: 'dev',

  flagsmith: 'ENktaJnfLVbLifybz34JmX',

  flagsmithClientAPI: 'https://api.flagsmith.com/api/v1/',

  flagsmithClientEdgeAPI: 'https://edge.api.flagsmith.com/api/v1/',
  // This is used for Sentry tracking
  maintenance: false,
  plans: {
    scaleUp: { annual: 'scale-up-annual-v2', monthly: 'scale-up-v2' },
    startup: { annual: 'startup-annual-v2', monthly: 'startup-v2' },
  },
  useSecureCookies: false,
  ...(globalThis.projectOverrides || {}),
}
