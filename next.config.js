/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const withExportImages = require('next-export-optimize-images')


module.exports = withExportImages({
    output: 'export',
    assetPrefix: isProd ? 'https://wdh2100.github.io/20230624/' : '',
})
