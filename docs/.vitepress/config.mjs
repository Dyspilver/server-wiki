import { defineConfig } from 'vitepress'

// DVCraft Wiki 的 VitePress 配置
// 文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站语言，影响字体、日期格式、无障碍提示等
  lang: 'zh-CN',

  // 浏览器标签页上显示的标题
  title: 'DVCraft Wiki',

  // 被搜索引擎收录时的简介
  description: 'DVRraft 服务器官方 Wiki：原版强化玩法、领地系统与服务器守则',

  // 【部署时要改这里】发布到 GitHub Pages 的项目站点时，仓库名决定路径，
  // 例如仓库叫 server-wiki 就写 base: '/server-wiki/'；
  // 若是 username.github.io 这种用户站点则保持 '/'。
  base: '/',

  // 显示每篇文档的最后更新时间
  lastUpdated: true,

  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' }
    ],

    // 左侧边栏：只对 /guide/ 下的页面显示
    // 说明：一个分组可以同时有 link 和 items —— 分组标题本身可点击跳转，
    // 右侧箭头负责展开/收起子项。collapsed: true 表示默认收起。
    sidebar: {
      '/guide/': [
        {
          text: '开始之前',
          items: [
            { text: '服务器来源', link: '/guide/source' },
            { text: '服务器守则', link: '/guide/rule' },
          ],
        },
        {
          text: '基础玩法',
          link: '/guide/common_gameplay',
          collapsed: false,
          items: [
            { text: '领地系统 🏠', link: '/guide/dom' },
          ],
        },
      ],
    },

    // 右侧"本页目录"：抓取 2~3 级标题
    outline: { level: [2, 3], label: '本页目录' },

    // 底部上一页 / 下一页的文字
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 各种界面文字的中文
    lastUpdatedText: '上次更新',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',

    // 站内搜索（本地索引，不依赖任何外部服务，国内也能正常用）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResults: '没有找到相关内容',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
})
