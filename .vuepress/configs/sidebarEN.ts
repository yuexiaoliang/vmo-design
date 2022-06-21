import { SidebarConfig } from 'vuepress';

export const sidebarEN: SidebarConfig = {
  '/en/guide/': [
    {
      text: 'Documentation',
      children: ['/docs/guide/README_EN.md']
    }
  ],
  '/en/components/': [
    {
      text: 'Base Component',
      children: ['/components/Button/README_EN.md']
    },
    {
      text: 'Test Component',
      children: ['/components/Test/README_EN.md']
    },
    {
      text: 'Jsx Component',
      children: ['/components/JsxTest/README_EN.md']
    }
  ]
};
