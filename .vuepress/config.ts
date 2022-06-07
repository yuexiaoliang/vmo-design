import { defineUserConfig, defaultTheme } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import path from 'path';
import { navbar, navbarEN, sidebar, sidebarEN } from './configs';
import LocalesPathHandler from './plugins/locales-path-handler';

const root = path.resolve(__dirname, '../');

export default defineUserConfig({
  title: 'Vmo Design',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  locales: {
    '/': {
      description: '一个没啥创意的 Vue 组件库'
    },
    '/en': {
      description: 'A Vue component library without any creative'
    }
  },

  port: 8890,
  temp: path.resolve(root, '.vuepress/.temp'),
  cache: path.resolve(root, '.vuepress/.cache'),
  dest: path.resolve(root, '.vuepress/dist'),
  public: path.resolve(root, '.vuepress/public'),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(root, './components'),
      getComponentName: (filePath) => {
        return filePath.replace(/^.*\/demo\/([^/]+)\.vue$/, '$1');
      }
    }),
    LocalesPathHandler()
  ],

  markdown: {
    importCode: {
      handleImportPath(importPath) {
        let res = importPath;
        if (importPath.startsWith('~/')) {
          res = importPath.replace('~/', './demo/');
        }

        if (importPath.startsWith('@/')) {
          res = importPath.replace('@', path.resolve(root, 'components'));
        }

        if (importPath.startsWith('_/')) {
          res = importPath.replace('_', root);
        }

        return res;
      }
    }
  },

  theme: defaultTheme({
    logo: 'images/logo.png',
    repo: 'https://github.com/yuexiaoliang/vmo-design',
    locales: {
      '/': {
        home: '/docs/README.md',
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新于',
        contributorsText: '贡献者',
        notFound: ['找不到页面哦～', '没有您要找的页面哦～'],
        backToHome: '返回首页',
        navbar,
        sidebar
      },
      '/en': {
        home: '/docs/README_EN.md',
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Contributors',
        notFound: ['Page not found', 'No page found'],
        backToHome: 'Back to home',
        navbar: navbarEN,
        sidebar: sidebarEN
      }
    }
  })
});
