// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/supabase'
  ],
  app: {
    head: {
      title: 'esskayesss | portfolio',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'title', content: 'esskayesss | portfolio' },
        { name: 'description', content: `i'm saurabh sharma, a CSE undergrad specializing in artificial intelligence.i like building intelligent things that live on computers.` },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://esskayesss.dev/' },
        { property: 'og:title', content: 'esskayesss | portfolio' },
        { property: 'og:description', content: `i'm saurabh sharma, a CSE undergrad specializing in artificial intelligence.i like building intelligent things that live on computers.` },
        { property: 'og:image', content: 'https://esskayesss.dev/og.png' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://esskayesss.dev/' },
        { property: 'twitter:title', content: 'esskayesss | portfolio' },
        { property: 'twitter:description', content: `i'm saurabh sharma, a CSE undergrad specializing in artificial intelligence.i like building intelligent things that live on computers.` },
        { property: 'twitter:image', content: 'https://esskayesss.dev/og.png' },
      ]
    }
  },
  css: [
    '@/assets/style/main.css'
  ],

  tailwindcss: {
    cssPath: '@/assets/style/main.css',
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            bitmap: ['GohuFont Nerd Font', 'sans-serif']
          },
          colors: {
            accent: "#19B315",
            accentdark: "#00982B",
            accentlight: "#27ff20"
          },
          screens: {
            "mob": "1100px",
            "tab": "1150px",
            "desktop": "1440px"
          }
        }
      }
    }
  }
})