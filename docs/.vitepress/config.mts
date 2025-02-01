import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

export default defineConfig({
  title: 'ProFabX',
  description: 'NexMaker Fab课程 | 工程样机开发 | OSV',
  themeConfig: {
    nav: [
      { text: 'Fab课程', items: [
        { text: 'NexMaker Fab课程', link: '/zh/fab/nexmaker' },
        { text: 'Fab实验室', link: '/zh/fab/lab' },
        { text: 'Fab academy', link: '/zh/fab/academy' },
        { text: 'MIT FabLab认证', link: '/zh/fab/mit' },
        { text: '探索', link: '/zh/fab/explore' }
      ]},
      { text: '工程样机开发', items: [
        { text: '材料', link: '/zh/proto/material' },
        { text: '制造工艺', link: '/zh/proto/manufacture' },
        { text: '后处理', link: '/zh/proto/postprocess' },
        { text: '测试', link: '/zh/proto/testing' },
        { text: '探索', link: '/zh/proto/explore' }
      ]},
      { text: 'OSV', items: [
        { text: '教育套件', link: '/zh/osv/edu' },
        { text: '工程方案', link: '/zh/osv/solution' },
        { text: '探索', link: '/zh/osv/explore' }
      ]},
      { text: '关于ProFabX', items: [
        { text: '介绍', link: '/zh/about/intro' },
        { text: '团队', link: '/zh/about/team' },
        { text: '联系', link: '/zh/about/contact' }
      ]}
    ],
    sidebar: {
      '/zh/fab/': [
        { text: 'NexMaker Fab课程', link: '/zh/fab/nexmaker', items: [
          { text: '入门', link: '/zh/fab/nexmaker/start' },
          { text: '高级', link: '/zh/fab/nexmaker/advanced' }
        ]},
        { text: 'Fab实验室', link: '/zh/fab/lab' },
        { text: 'Fab academy', link: '/zh/fab/academy' },
        { text: 'MIT FabLab认证', link: '/zh/fab/mit' },
        { text: '探索', link: '/zh/fab/explore' }
      ],
      '/zh/proto/': [
        { text: '材料', link: '/zh/proto/material' },
        { text: '制造工艺', link: '/zh/proto/manufacture' },
        { text: '后处理', link: '/zh/proto/postprocess' },
        { text: '测试', link: '/zh/proto/testing' },
        { text: '探索', link: '/zh/proto/explore' }
      ],
      '/zh/osv/': [
        { text: '教育套件', link: '/zh/osv/edu' },
        { text: '工程方案', link: '/zh/osv/solution' },
        { text: '探索', link: '/zh/osv/explore' }
      ],
      '/zh/about/': [
        { text: '介绍', link: '/zh/about/intro' },
        { text: '团队', link: '/zh/about/team' },
        { text: '联系', link: '/zh/about/contact' }
      ]
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      label: '简体中文',
      themeConfig: {
        nav: [
          { text: 'Fab课程', items: [
            { text: 'NexMaker Fab课程', link: '/zh/fab/nexmaker' },
            { text: 'Fab实验室', link: '/zh/fab/lab' },
            { text: 'Fab academy', link: '/zh/fab/academy' },
            { text: 'MIT FabLab认证', link: '/zh/fab/mit' },
            { text: '探索', link: '/zh/fab/explore' }
          ]}
        ]
      }
    },
    '/en/': {
      lang: 'en-US',
      label: 'English',
      themeConfig: {
        nav: [
          { text: 'Fab Courses', items: [
            { text: 'NexMaker Fab Courses', link: '/en/fab/nexmaker' },
            { text: 'Fab Lab', link: '/en/fab/lab' },
            { text: 'Fab Academy', link: '/en/fab/academy' },
            { text: 'MIT FabLab Certification', link: '/en/fab/mit' },
            { text: 'Explore', link: '/en/fab/explore' }
          ]}
        ]
      }
    },
    '/ja/': {
      lang: 'ja-JP',
      label: '日本語',
      themeConfig: {
        nav: [
          { text: 'Fabコース', items: [
            { text: 'NexMaker Fabコース', link: '/ja/fab/nexmaker' },
            { text: 'Fabラボ', link: '/ja/fab/lab' },
            { text: 'Fabアカデミー', link: '/ja/fab/academy' },
            { text: 'MIT FabLab認証', link: '/ja/fab/mit' },
            { text: '探る', link: '/ja/fab/explore' }
          ]}
        ]
      }
    }
  }
})
