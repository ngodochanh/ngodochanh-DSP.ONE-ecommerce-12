import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DSP.ONE Lite',
    short_name: 'DSP.ONE Lite',
    description:
      'DSP.ONE là điểm đến lý tưởng cho xu hướng thời trang mới nhất và trang phục chất lượng cao. Khám phá bộ sưu tập quần áo, phụ kiện và giày dép thiết kế tinh tế, từ trang phục hàng ngày đến đồ sang trọng, cùng với dịch vụ chăm sóc khách hàng hàng đầu và gợi ý cá nhân hóa. Nâng tầm tủ đồ của bạn với DSP.ONE ngay hôm nay.',
    icons: [
      {
        src: 'https://v2.nuxt.com/_nuxt/icons/icon_64x64.6dcbd4.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'https://v2.nuxt.com/_nuxt/icons/icon_120x120.6dcbd4.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: 'https://v2.nuxt.com/_nuxt/icons/icon_144x144.6dcbd4.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: 'https://v2.nuxt.com/_nuxt/icons/icon_152x152.6dcbd4.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: 'https://v2.nuxt.com/_nuxt/icons/icon_192x192.6dcbd4.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://v2.nuxt.com/_nuxt/icons/icon_384x384.6dcbd4.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'https://v2.nuxt.com/_nuxt/icons/icon_512x512.6dcbd4.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    lang: 'vi',
    theme_color: '#1A94FF',
    background_color: '#ffffff',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid',
        id: 'vn.tiki.app.tikiandroid',
      },
      {
        platform: 'itunes',
        url: 'https://apps.apple.com/vn/app/tiki-shopping-fast-shipping/id958100553',
      },
      {
        platform: 'webapp',
        url: 'https://tiki.vn/manifest.json',
      },
    ],
    scope: '/',
  };
}
