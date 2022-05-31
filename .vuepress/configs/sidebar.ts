import { SidebarConfig } from 'vuepress';

export const sidebar: SidebarConfig = {
  '/docs/': [
    {
      text: '文档',
      children: ['/docs/guide/README.md']
    }
  ],
  '/src/': [
    {
      text: '基础组件',
      children: ['/src/Button/README.md']
    },
    {
      text: '测试组件',
      children: ['/src/Test/README.md']
    }
  ]
};
