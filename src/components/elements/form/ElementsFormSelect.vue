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
      <span
        v-if="isRequired"
        class="label-text-alt"
      >
        Required
      </span>
    </label>
    <select
      v-model="modelValue"
      :name="name"
      :required="isRequired"
      :disabled="isDisabled"
      class="select w-full"
    >
      <option
        disabled
        selected
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, value) in options"
        :key="value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <label class="label">
      <span class="label-text-alt">
        {{ labelBottom }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
  import { TElementsFormSelect } from "~~/types/components/elements/form/TElementsFormSelect";

  // prop
  interface Props {
    modelValue: TElementsFormSelect['value'];
    name?: TElementsFormSelect['name'];
    options: TElementsFormSelect['options'];
    placeholder?: TElementsFormSelect['placeholder'];
    isRequired?: TElementsFormSelect['isRequired'];
    isDisabled?: TElementsFormSelect['isDisabled'];
    labelTop?: TElementsFormSelect['labelTop'];
    labelBottom?: TElementsFormSelect['labelBottom'];
    width?: TElementsFormSelect['width'];
    maxWidth?: TElementsFormSelect['maxWidth'];
  }

  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: '',
      name: '',
      options:() => [],
      placeholder: 'Pick one',
      isRequired: true,
      isDisabled: false,
      labelTop: '',
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

  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', props.name, value)
  });

  const placeholder = computed(() => {
    return props.options.length ? 'Pick one' : 'No options' 
  });

  const isDisabled = computed(() => {
    return props.options.length ? props.isDisabled : true 
  });

  // classObject
  const classObject = computed(() => {
    return {
      'w-1/6' : props.width === '1/6',
      'w-1/5' : props.width === '1/5',
      'w-1/4' : props.width === '1/4',
      'w-1/3' : props.width === '1/3',
      'w-2/5' : props.width === '2/5',
      'w-1/2' : props.width === '1/2',
      'w-full' : props.width === 'full',
      'w-96' : props.width === '96',
      'w-80' : props.width === '80',
      'w-64' : props.width === '64',
      'w-48' : props.width === '48',
      'w-40' : props.width === '40',
      'w-32' : props.width === '32',
      'w-24' : props.width === '24',
      'max-w-xs' : props.maxWidth === 'xs',
      'max-w-sm' : props.maxWidth === 'sm',
      'max-w-md' : props.maxWidth === 'md',
      'max-w-lg' : props.maxWidth === 'lg',
      'max-w-xl' : props.maxWidth === 'xl',
      'mt-4' : props.labelTop === '',
      'pb-4' : props.labelBottom === '',
    }
  })

</script>