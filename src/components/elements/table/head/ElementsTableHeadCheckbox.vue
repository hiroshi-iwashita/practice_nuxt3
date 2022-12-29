<template>
  <label>
    <input
      v-model="modelValue"
      type="checkbox"
      class="checkbox"
    />
  </label>
</template>

<script lang="ts" setup>
  import { TElementsTableHeadCheckbox } from "~~/types/components/elements/table/head/TElementsTableHeadCheckbox";

  // prop
  interface Props {
    text: TElementsTableHeadCheckbox["text"]
    modelValue: TElementsTableHeadCheckbox["modelValue"]
  }

  const props = withDefaults(
    defineProps<Props>(), {
      text: '',
      modelValue: false
    }
  );

  // emit
  interface Emits {
    (e: 'update:modelValue', text: boolean): void;
  }
  const emit = defineEmits<Emits>();

  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
  });

</script>
