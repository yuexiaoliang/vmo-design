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
      text: 'Base Components',
      children: ['/components/Button/README_EN.md']
    },
    {
      text: 'Test Components',
      children: ['/components/Test/README_EN.md']
    }
  ]
};
