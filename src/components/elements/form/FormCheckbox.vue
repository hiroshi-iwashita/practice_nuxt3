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
      v-model.boolean="modelValue"
      type="checkbox"
      :required.boolean="isRequired"
      :disabled.boolean="isDisabled"
      class="checkbox bg-base-300 checkbox-secondary" 
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
    modelValue: boolean;
    labelTop?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    labelBottom?: string;
  }

  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: false,
      labelTop: '',
      isRequired: true,
      isDisabled: false,
      labelBottom: '',
    }
  );

  // emit
  interface Emits {
    (e: 'update:modelValue', checked: boolean): void;
  }
  const emit = defineEmits<Emits>();

  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
  });

  // classObject
  const classObject = computed(() => {
    return {
      'mt-4' : props.labelTop === '',
      'pb-4' : props.labelBottom === '',
    }
  })

</script>