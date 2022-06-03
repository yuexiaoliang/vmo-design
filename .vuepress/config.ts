import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import path from 'path';
import { sidebar, navbar } from './configs';

const root = path.resolve(__dirname, '../');

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Vmo Design',
  description: '一个没啥创意的 Vue 组件库',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

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
    })
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
    home: '/index.md',
    logo: 'images/logo.png',
    repo: 'https://github.com/yuexiaoliang/vmo-design',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新于',
    contributorsText: '贡献者',
    notFound: ['找不到页面哦～', '没有您要找的页面哦～'],
    backToHome: '返回首页',
    sidebar,
    navbar
  })
});
