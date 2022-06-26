import { SidebarConfig } from 'vuepress';

export const sidebarUS: SidebarConfig = {
  '/en/guide/': [
    {
      text: 'Documentation',
      children: ['/docs/guide/index.en-US.md']
    }
  ],
  '/en/components/': [
    {
      text: 'Base Component',
      children: ['/components/Button/index.en-US.md']
    },
    {
      text: 'Test Component',
      children: ['/components/Test/index.en-US.md']
    },
    {
      text: 'Jsx Component',
      children: ['/components/JsxTest/index.en-US.md']
    }
  ]
};
