import { App } from 'vue';

import Test from './Test.vue';

Test.install = function (app: App) {
  app.component(Test.name, Test);
};

export { Test };
