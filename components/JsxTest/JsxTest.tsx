import { defineComponent } from 'vue';
import './styles/index.scss';

export default defineComponent({
  name: 'JsxTest',
  props: {
    msg: String
  },
  setup(props) {
    const click = () => {
      console.log('JsxTest click!');
    };
    return () => (
      <div class='vmo-jsxtest' onClick={click}>
        {props.msg}
      </div>
    );
  }
});
