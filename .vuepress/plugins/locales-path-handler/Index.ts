import { pageDataEmpty } from '@vuepress/client';
import path from 'path';
import { writeLog } from '../../../utils/common';

export default () => {
  return {
    name: 'LocalesPathHandler',
    onInitialized(app) {
      // 剔除项目跟目录下的 README.md 文件
      const source = app.options.source;
      const pages = app.pages.filter(
        (page) =>
          path.normalize(page.filePath || '') !==
          path.normalize(source + '/README.md')
      );

      pages.forEach((page) => {
        const { pathInferred, path, data, htmlFilePath, htmlFilePathRelative } =
          page;
        const dataPath = data.path;
        page.path = handlePath(path);
        page.data.path = handlePath(dataPath);
        page.pathInferred = handlePath(pathInferred);

        page.htmlFilePathRelative = handleDistPath(htmlFilePathRelative);
        page.htmlFilePath = htmlFilePath.replace(
          htmlFilePathRelative,
          page.htmlFilePathRelative
        );
      });

      app.pages = pages;

      writeLog(pages, './VUEPRESS_APP_PAGES.js');
      writeLog(app, './VUEPRESS_APP.js');
    }
  };
};

function handleDistPath(p) {
  if (!p) return p;
  let result = p;

  const r1 = /.*\/+(?<fileName>.*_EN)\.html/;

  if (r1.test(p)) {
    result = 'en/' + p.replace(r1.exec(p).groups?.fileName, 'index');
  }

  if (/^(en\/)?docs\//.test(result)) {
    result = result.replace(/docs\//, '');
  }

  return result;
}

function handlePath(p) {
  if (!p) return p;
  let result = p;

  const r1 = /.*\/+(?<fileName>.*_EN\.html)/;
  if (r1.test(p)) {
    result = '/en' + p.replace(r1.exec(p).groups?.fileName, '');
  }

  if (/^(\/en)?\/docs\//.test(result)) {
    result = result.replace(/\/docs\//, '/');
  }

  return result;
}
