<template>
  <div
    class="form-control"
    :class="classObject"
  >
    <label
      v-if="labelTop !== ''"
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
    <input
      v-model.string="modelValue"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="isRequired"
      :disabled="isDisabled"
      class="input input-md w-full"
    />
    <label
      v-if="labelBottom !== ''"
      class="label"
    >
      <span class="label-text-alt">
        {{ labelBottom }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
  import { TElementsFormTextInput } from "~~/types/components/elements/form/TElementsFormTextInput";

  // prop
  interface Props {
    modelValue: TElementsFormTextInput['value'];
    type?: TElementsFormTextInput['type'];
    name?: TElementsFormTextInput['name'];
    placeholder?: TElementsFormTextInput['placeholder'];
    isRequired?: TElementsFormTextInput['isRequired'];
    isDisabled?: TElementsFormTextInput['isDisabled'];
    labelTop?: TElementsFormTextInput['labelTop'];
    labelBottom?: TElementsFormTextInput['labelBottom'];
    width?: TElementsFormTextInput['width'];
    maxWidth?: TElementsFormTextInput['maxWidth'];
  }

  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: '',
      type: 'text',
      name: '',
      placeholder: 'Type here',
      isRequired: true,
      isDisabled: false,
      labelTop: '',
      labelBottom: '',
      width: 'full',
      maxWidth: 'xs',
    }
  );

  // emit
  interface Emits { 
    (e: 'update:modelValue', value: string): void;
  }
  const emit = defineEmits<Emits>();

  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', props.name, value)
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