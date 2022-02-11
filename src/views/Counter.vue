<template>
  <div class="counter">
    <h1>This is an counter page</h1>
    <p>Count {{ counter }}</p>
    <p>Previous Count {{ prevCounter }}</p>
    <button @click="plus">+</button> &nbsp;
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Counter",
  setup() {
    const counter = ref<number>(0);
    const prevCounter = ref<number>(0);

    watch(counter, (val: number, prevVal: number) => {
      prevCounter.value = prevVal;
    });

    /**
     * plus
     * =
     * purpose
     * -
     * plus one to existing counter
     */
    const plus = (): number => (counter.value += 1);

    /**
     * minus
     * =
     * purpose
     * -
     * plus one to existing counter
     */
    const minus = (): number => (counter.value -= 1);

    return {
      counter,
      prevCounter,
      plus,
      minus,
    };
  },
});
</script>
