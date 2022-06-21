import { SidebarConfig } from 'vuepress';

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: '文档',
      children: ['/guide/']
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      children: ['/components/Button/']
    },
    {
      text: '测试组件',
      children: ['/components/Test/']
    },
    {
      text: 'Jsx 组件',
      children: ['/components/JsxTest/']
    }
  ]
};
