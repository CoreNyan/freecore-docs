// 侧边栏结构由 config.ts 统一维护；此文件保留为兼容旧主题配置的占位模块。
module.exports = {
  '/': [
    { title: '服务器规则', collapsable: false, children: [['/server-rules', '服务器条款']] },
    { title: '基础', collapsable: false, children: [['/basic', '基础指南'], ['/basic-example', '示例文章']] },
    { title: '进阶', collapsable: false, children: [['/advanced', '进阶指南'], ['/advanced-example', '示例文章']] },
  ],
}
