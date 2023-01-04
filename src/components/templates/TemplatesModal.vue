<template>
  <ElementsOverlay
    v-model="modelValue"
  >
    <ElementsCard
      class="modal-box w-10/12 max-w-3xl relative"
    >
      <label
        for="modal"
        class="btn btn-sm btn-circle btn-neutral btn-outline absolute right-4 top-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>

      <slot></slot>
    </ElementsCard>
  </ElementsOverlay>
</template>

<script lang="ts" setup>
  import { TElementsBreadCrumbs } from "~~/types/components/elements/breadCrumbs/TElementsBreadCrumbs";

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
