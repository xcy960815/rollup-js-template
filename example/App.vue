<template>
  <div class="rollup-ts-template"></div>
</template>

<script>
import { defineComponent } from 'vue';
import { createElement } from 'rollup-js-template';
export default defineComponent({
  name: 'App',
  mounted() {
    createElement('div', 'rollup-js-template');
  },
});
</script>
<style lang="less" scoped></style>
