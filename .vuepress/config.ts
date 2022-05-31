import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import path from 'path';
import { sidebar, navbar } from './configs';

const root = path.resolve(__dirname, '../');

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Vmo Design',
  description: '一个没啥创意的 Vue 物料库',

  port: 8890,
  temp: path.resolve(root, '.vuepress/.temp'),
  cache: path.resolve(root, '.vuepress/.cache'),
  dest: path.resolve(root, '.vuepress/dist'),
  public: path.resolve(root, '.vuepress/public'),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(root, './src'),
      getComponentName: (filePath) => {
        return filePath.replace(/^.*\/demo\/([^/]+)\.vue$/, '$1');
      }
    })
  ],

  theme: defaultTheme({
    home: '/index.md',
    logo: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
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
