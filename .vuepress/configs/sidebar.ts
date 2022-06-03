import { SidebarConfig } from 'vuepress';

export const sidebar: SidebarConfig = {
  '/docs/': [
    {
      text: '文档',
      children: ['/docs/guide/README.md']
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      children: ['/components/Button/README.md']
    },
    {
      text: '测试组件',
      children: ['/components/Test/README.md']
    }
  ]
};
