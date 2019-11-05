module.exports = {
    base: '/blog-demo/',
    title: 'blog-demo',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/yi-fish/blog-demo.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' },
            { text: 'Vue', link: '/blog/Vue.md' }
        ],
        // sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客'],
            ['/blog/Vue.md','Vue.$nextTick']
          ]
    }
  }