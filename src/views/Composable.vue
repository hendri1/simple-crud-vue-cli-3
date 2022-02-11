<template>
  <div class="counter with composable">
    <h1>This is an counter page with composable</h1>
    <p>Count {{ counter }}</p>
    <p>Previous Count {{ prevCounter }}</p>
    <button @click="plus">+</button> &nbsp;
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useCounter from "../composable/useCounter";

export default defineComponent({
  name: "Counter",
  setup() {
    const { counter, prevCounter, plus, minus } = useCounter();

    return {
      counter,
      prevCounter,
      plus,
      minus,
    };
  },
});
</script>
