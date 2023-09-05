<template>
  <div>
    <!-- <div>{{ showIf }}</div>
    <div>{{ errKey }}</div>
    <div>{{ errData }}</div> -->
    <div>{{ store.getError(errKey) }}</div>
  </div>
</template>

<script setup>
  import { useFormStore } from '@/stores/form';
  const store = useFormStore();

  const props = defineProps({
    showIf: {
      type: Boolean,
      required: true,
    },
    errKey: {
      type: String,
      required: true,
    },
    errData: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="scss" scoped></style>
