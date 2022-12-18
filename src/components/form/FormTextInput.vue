<template>
  <div
    class="form-control"
    :class="classObject"
  >
    <label
      class="label"
    >
      <span
        class="label-text"
      >
        {{ labelTop }}
      </span>
    </label>
    <input
      v-model.string="modelValue"
      type="text"
      :placeholder.string="placeholder"
      class="input input-md bg-base-300 w-full"
      :disabled.boolean="isDisabled"
    />
    <label class="label">
      <span class="label-text-alt">
        {{ labelBottom }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    modelValue: string;
    labelTop?: string;
    placeholder?: string;
    isDisabled?: boolean;
    labelBottom?: string;
    width?: string;
    maxWidth?: string;
  }

  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: '',
      labelTop: '',
      placeholder: 'Type here',
      isDisabled: false,
      labelBottom: '',
      width: 'full',
      maxWidth: 'xs'
    }
  );

  // emit
  interface Emits {
    (e: 'update:modelValue', text: string): void;
  }
  const emit = defineEmits<Emits>();

  // computed
  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
  });

  // classObject
  const classObject = computed(() => {
    return {
      'w-full' : props.width === 'full',
      'w-20' : props.width === '20',
      'max-w-xs' : props.maxWidth === 'xs',
      'max-w-md' : props.maxWidth === 'md',
      'max-w-lg' : props.maxWidth === 'lg',
      'mt-4' : props.labelTop === '',
      'pb-4' : props.labelBottom === '',
    }
  })

</script>