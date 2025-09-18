import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EUROASIA Scientific India Pvt. Ltd.',
    short_name: 'EUROASIA',
    description: 'Professional laboratory testing services across multiple industries. ISO 17025 certified with 99.9% accuracy rate.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#410798',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
