import { SidebarConfig } from 'vuepress';

export const sidebarCN: SidebarConfig = {
  '/guide/': [
    {
      text: '文档',
      children: ['/docs/guide/index.zh-CN.md']
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      children: ['/components/Button/index.zh-CN.md']
    },
    {
      text: '测试组件',
      children: ['/components/Test/index.zh-CN.md']
    },
    {
      text: 'Jsx 组件',
      children: ['/components/JsxTest/index.zh-CN.md']
    }
  ]
};
