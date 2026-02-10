/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  swcMinify: true,
  output: 'export',
  async rewrites () {
    return [
      {
        source: '/home',
        destination: '/'
      },
      {
        source: '/video/1',
        destination: '/1.mp4'
      },
	    {
	      source: "/bee.js",
	      destination: "https://cdn.splitbee.io/sb.js",
	    },
	    {
	      source: "/_hive/:slug",
	      destination: "https://hive.splitbee.io/:slug",
	    },
    ]
  },
  async redirects () {
    return [
      {
        source: '/edit',
        destination: 'https://github.com/YodaLightsabr/widensite/blob/main/copy/README.md',
        permanent: false,
        basePath: false
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800',
          }
        ],
      },
    ]
  }
}

module.exports = withMDX(nextConfig)
