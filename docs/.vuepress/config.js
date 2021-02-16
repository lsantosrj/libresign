module.exports = {
  title: 'LibreSign',
  base: '/doc/',
  description: 'Libre digital signature app for Nextcloud.',
  themeConfig: {
    locales: {
      '/': {
        sidebar: 'auto',
        nav: [
          {
            text: 'Guide',
            link: '/Getting-started' },
          {
            text: 'LibreCode',
            link: 'https://librecode.coop/'
          },
          {
            text: 'Github',
            link: 'https://github.com/libresign/libresign'
          }
        ]
      },
      '/pt/': {
        sidebar: 'auto',
        nav: [
          {
            text: 'Guia',
            link: '/Getting-started' },
          {
            text: 'LibreCode',
            link: 'https://librecode.coop/'
          },
          {
            text: 'Github',
            link: 'https://github.com/libresign/libresign'
          }
        ]
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/pt/': {
      lang: 'pt-BR',
      description: 'App de assinatura digital livre para Nextcloud.'
    }
  }
};