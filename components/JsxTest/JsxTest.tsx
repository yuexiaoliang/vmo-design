import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'JsxTest',
  props: {
    msg: String
  },
  setup(props) {
    return () => <div>{props.msg}</div>;
  }
});
