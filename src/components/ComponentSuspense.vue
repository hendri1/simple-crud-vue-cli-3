<template>
  <pre>{{ user }}</pre>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ComponentSuspense",
  async setup() {
    const user = ref<{
      name: string;
    }>({
      name: "",
    });

    const fetchData = async (): Promise<{
      name: string;
    }> => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // throw new Error("UPS! There was an error."); // uncoment this for throw error
      return {
        name: "John Doe",
      };
    };

    user.value = await fetchData();

    return {
      user,
    };
  },
});
</script>
