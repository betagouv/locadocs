//@ts-check cant be ts file
/* eslint-disable @typescript-eslint/naming-convention */
const path = require('path');
const transpileModules = require('next-transpile-modules')([
  '@locadocs/design-system',
  '@locadocs/shared',
]);
const isDev = process.env.NODE_ENV === 'development';
// Set the default headers management
const contentSecurityPolicy = Object.entries({
  'default-src': "'none'",
  'connect-src': "'self' https://stats.data.gouv.fr",
  'prefetch-src': "'self'",
  'script-src': isDev
    ? "'self' 'unsafe-inline' 'unsafe-eval' https://stats.data.gouv.fr https://www.googletagmanager.com/ https://www.googleadservices.com https://googleads.g.doubleclick.net"
    : "'self' 'unsafe-inline' https://stats.data.gouv.fr https://www.googletagmanager.com/ https://www.googleadservices.com https://googleads.g.doubleclick.net",
  'style-src': "'self' 'unsafe-inline'",
  'img-src':
    "'self' data: https://www.google.com https://www.google.fr https://*.privacysandbox.googleadservices.com https://www.googletagmanager.com https://googleads.g.doubleclick.net",
  sandbox: 'allow-scripts allow-same-origin allow-forms allow-downloads',
  'frame-ancestors': "'none'",
  // 'trusted-types': "'none'",
  'navigate-to': "'self'",
  'form-action': "'none'",
  'base-uri': "'none'",
  'font-src': "'self' data:",
})
  .filter(([_key, value]) => Boolean(value))
  .map(([key, value]) => `${key} ${value};`)
  .join('');

const generateHeaders = object => {
  return Object.entries(object).map(([key, value]) => ({ key, value }));
};

const denyPermissions = (...features) => {
  return features.map(feature => `${feature}=()`).join();
};

module.exports = transpileModules({
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },

  // Remove the http header powered by vercel
  poweredByHeader: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  productionBrowserSourceMaps: true,

  env: {
    ENV: process.env.VERCEL_ENV ?? 'development',
  },

  // Force the React strict mode for the entire app
  reactStrictMode: true,

  // Redirect all the routes/ to routes without the trailing slash
  trailingSlash: false,

  // Set the default headers management
  async headers() {
    return [
      {
        source: '/((?!api/).*)',
        headers: generateHeaders({
          'Content-Security-Policy': contentSecurityPolicy,
          'X-Frame-Options': 'deny',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'no-referrer',
          'Permissions-Policy': denyPermissions(
            'accelerometer',
            'autoplay',
            'camera',
            'encrypted-media',
            'fullscreen',
            'geolocation',
            'gyroscope',
            'magnetometer',
            'microphone',
            'midi',
            'payment',
            'picture-in-picture',
            'publickey-credentials-get',
            'sync-xhr',
            'usb',
            'screen-wake-lock',
            'xr-spatial-tracking',
          ),
        }),
      },
      {
        source: '/api/(.*)',
        headers: generateHeaders({
          'Access-Control-Allow-Origin':
            process.env.VERCEL_ENV === 'production'
              ? `https://${process.env.URL}`
              : '*',
        }),
      },
    ];
  },

  // Set the default headers management
  webpack(config) {
    // To work with the typescript absolut paths
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@components': path.resolve(__dirname, 'components'),
      '@constants': path.resolve(__dirname, 'constants'),
      '@static-data': path.resolve(__dirname, 'static-data'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@views': path.resolve(__dirname, 'views'),
    };

    return config;
  },
});
