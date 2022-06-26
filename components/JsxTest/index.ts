import { App } from 'vue';

import JsxTest from './JsxTest';

JsxTest.install = function (app: App) {
  app.component(JsxTest.name, JsxTest);
};

export { JsxTest };
