<template>
  <div
    class="form-control"
    :class="classObject"
  >
    <label class="label cursor-pointer">
      <span class="label-text">
        {{ labelTop }}
      </span>
    </label>
    <input
      v-model="modelValue"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      :checked="isChecked"
      class="toggle toggle-primary" 
    />
    <label class="label">
      <span class="label-text-alt">
        {{ labelBottom }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
  import { TElementsFormToggle } from "~~/types/components/elements/form/TElementsFormToggle";

  // prop
  interface Props {
    modelValue: TElementsFormToggle['value'];
    name: TElementsFormToggle['name'];
    isDisabled?: TElementsFormToggle['isDisabled'];
    isChecked?: TElementsFormToggle['isChecked'];
    labelTop?: TElementsFormToggle['labelTop'];
    labelBottom?: TElementsFormToggle['labelBottom'];
  }

  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: false,
      name: '',
      isDisabled: false,
      isChecked: false,
      labelTop: '',
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
    set: (value: boolean) => emit('update:modelValue', props.name, value)
  });

  // classObject
  const classObject = computed(() => {
    return {
      'mt-4' : props.labelTop === '',
      'pb-4' : props.labelBottom === '',
    }
  })

</script>