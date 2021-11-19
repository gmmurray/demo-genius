/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
module.exports = withPWA({
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
});
