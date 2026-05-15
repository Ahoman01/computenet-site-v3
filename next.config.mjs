/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/docs/core-concepts',
        destination: '/docs/concepts',
        permanent: true,
      },
      {
        source: '/docs/development',
        destination: '/docs/dev',
        permanent: true,
      },
      {
        source: '/docs/infrastructure',
        destination: '/docs/infra',
        permanent: true,
      },
      {
        source: '/docs/concepts/what-is-computenet',
        destination: '/docs/concepts/overview',
        permanent: true,
      },
      {
        source: '/docs/concepts/compute-receipts',
        destination: '/docs/concepts/receipts',
        permanent: true,
      },
      {
        source: '/docs/concepts/verification-protocol',
        destination: '/docs/concepts/verification',
        permanent: true,
      },
      {
        source: '/docs/concepts/network-topology',
        destination: '/docs/concepts/topology',
        permanent: true,
      },
      {
        source: '/docs/dev/building-on-computenet',
        destination: '/docs/dev/building',
        permanent: true,
      },
      {
        source: '/docs/dev/submitting-jobs',
        destination: '/docs/dev/jobs',
        permanent: true,
      },
      {
        source: '/docs/dev/verifying-results',
        destination: '/docs/dev/verification',
        permanent: true,
      },
      {
        source: '/docs/dev/testing-guide',
        destination: '/docs/dev/testing',
        permanent: true,
      },
      {
        source: '/docs/infra/network-architecture',
        destination: '/docs/infra/architecture',
        permanent: true,
      },
      {
        source: '/docs/infra/node-configuration',
        destination: '/docs/infra/config',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
