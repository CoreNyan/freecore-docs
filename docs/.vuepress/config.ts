/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const DOMAIN_NAME = 'docs.freecore.cc' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'FreeCore Docs',
      description: 'FreeCore 自由核心-官方文档，记录与服务器有关的官方指南。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '规则', link: '/rules/' },
      { text: '基础', link: '/basic/' },
      { text: '进阶', link: '/advanced/' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/icon.png', // 导航栏logo
    repo: 'CoreNyan/freecore-docs', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    defaultMode: 'dark',

    // FreeCore Wiki navigation: one global three-section outline, like DeepWiki.
    sidebar: {
      '/': [
        {
          title: '规则',
          collapsable: false,
          children: [
            ['rules/server-rules', '服务器条款'],
            ['rules/group-rules', '群规'],
          ],
        },
        {
          title: '基础',
          collapsable: false,
          children: [
            ['/basic/basic', '基础指南'],
            ['/basic/entry-guide', '入服指南'],
          ],
        },
        {
          title: '进阶',
          collapsable: false,
          children: [
            ['/advanced/advanced', '进阶指南'],
          ],
        },
      ],
    },

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'FreeCore', // 必需
      link: 'https://github.com/CoreNyan', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/icon.png',
      name: 'FreeCore',
      slogan: '溯链自由 · 锚定核心',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/CoreNyan/freecore-docs',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2026, // 博客创建年份
      copyrightInfo:
        'FreeCore Docs | <a href="https://github.com/CoreNyan/freecore-docs" target="_blank">GitHub</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'FreeCore',
        link: 'https://github.com/CoreNyan'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }], //favicons，资源放在public文件夹
    ['script', {}, "try { window.localStorage.removeItem('mode') } catch (e) {}"],
    ['script', { src: '/click-particles.js', defer: true }],
    ['script', { src: '/footer-label.js', defer: true }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'FreeCore,Minecraft,服务器文档,服务器规则,生存,生电,红石,社区协作',
      },
    ],
    ['meta', { name: 'theme-color', content: '#090909' }], // 移动浏览器主题颜色
  ],


  // 插件配置
  plugins: <UserPlugins>[

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在 Minecraft Wiki 中搜索',
            frontUrl: 'https://minecraft.wiki/?search=',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '搜索 FreeCore 文档',
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          },
        ],
      }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
