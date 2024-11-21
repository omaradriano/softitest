import { reactive } from 'vue';

export const Numbers = reactive({
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
});

export default Numbers