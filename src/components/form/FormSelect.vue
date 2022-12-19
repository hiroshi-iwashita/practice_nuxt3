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
    <select
      v-model.string="modelValue"
      :name.string="name"
      :required.boolean="isRequired"
      :disabled.boolean="isDisabled"
      class="select bg-base-300 w-full"
    >
      <option
        disabled
        selected
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(item, index) in options"
        :key="index"
        :value.string="item"
      >
        {{item}}
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
  // prop
  interface Props {
    modelValue: string;
    name: string;
    options: string[];
    labelTop?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    labelBottom?: string;
    width?: string;
    maxWidth?: string;
  }

  const props = withDefaults(
    defineProps<Props>(), {
      modelValue: '',
      name: '',
      options:() => [],
      labelTop: '',
      placeholder: 'Pick one',
      isRequired: true,
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

  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
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