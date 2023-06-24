/** @type {import('next').NextConfig} */
const nextConfig = {
    output: {
        export: true,
        output: 'export',
        exportPathMap: () => ({})
      }
}

module.exports = nextConfig
