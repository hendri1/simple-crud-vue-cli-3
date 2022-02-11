<template>
  <h1>This is an Suspense page</h1>
  <div v-if="error">
    {{ error }}
  </div>
  <Suspense v-else>
    <template #default>
      <ComponentSuspense />
    </template>
    <template #fallback>
      <p>Fetching Component Suspense...</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from "vue";
import ComponentSuspense from "../components/ComponentSuspense.vue";

export default defineComponent({
  name: "Counter",
  components: {
    ComponentSuspense,
  },
  setup() {
    const error = ref<any>(null);

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    return { error };
  },
});
</script>
