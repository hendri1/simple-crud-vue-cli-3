import { readonly, Ref, ref, watch } from "vue";

export default (): {
  counter: Readonly<Ref<number>>;
  prevCounter: Ref<number>;
  plus: () => void;
  minus: () => void;
} => {
  const counter = ref<number>(0);
  const prevCounter = ref<number>(0);

  watch(counter, (newVal: number, prevVal: number) => {
    prevCounter.value = prevVal;
  });

  /**
   * plus
   * =
   * purpose
   * -
   * plus one to existing counter
   */
  const plus = (): void => {
    counter.value += 1;
  };

  /**
   * minus
   * =
   * purpose
   * -
   * plus one to existing counter
   */
  const minus = (): void => {
    counter.value += 1;
  };

  return {
    counter: readonly(counter),
    prevCounter: prevCounter,
    plus,
    minus,
  };
};
