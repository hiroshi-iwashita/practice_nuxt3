<template>
  <input
    v-model="modelValue"
    type="checkbox"
    id="modal"
    class="modal-toggle"
  />
  <label
    for="modal"
    class="modal cursor-pointer"
  >
    <slot></slot>
  </label>
</template>

<script lang="ts" setup>
  import { TElementsStep } from "~~/types/components/elements/step/TElementsStep";

  // prop
  interface Props {
    modelValue?: boolean
  };
  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: false
    }
  );

  // emit
  interface Emits { 
    (e: 'update:modelValue', value: boolean): void;
  }
  const emit = defineEmits<Emits>();

  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
  });

</script>
