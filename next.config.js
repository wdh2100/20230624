/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    reactStrictMode: true,
    output: 'export',
    assetPrefix: isProd ? 'https://wdh2100.github.io/20230624/' : '',
    swcMinify: true,
    images: {
        unoptimized: true,
    },
}
