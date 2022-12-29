<template>
  <!-- modal for progress -->
  <input
    v-model="modelValue"
    type="checkbox"
    id="modal"
    class="modal-toggle"
  />
  <label
    for="modal"
    class="modal cursor-pointer flex flex-col"
  >
    <div class="mb-4">Loading ...</div>
    <ElementsProgressBar v-if="type === 'bar'" />
    <ElementsProgressCircle v-if="type === 'circle'" />
  </label>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    modelValue?: boolean
    type?: string
  }

  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: true,
      type: 'bar'
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
