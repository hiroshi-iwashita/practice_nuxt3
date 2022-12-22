<template>
  <input
    type="submit"
    class="btn btn-primary btn-wide"
    :value="value"
    :disabled="isDisabled"
  />
  
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    value: string;
    disabled: boolean;
  }
  const props = withDefaults(
    defineProps<Props>(), {
      value: 'Login',
      disabled: false,
    }
  );

  const isDisabled = ref<boolean>(props.disabled)
  const updateDisabled = (tf: boolean) => {
    isDisabled.value =tf
  }

  // emit
  interface Emits {
    (e: 'clickEvent', text: boolean): void;
  }
  const emit = defineEmits<Emits>();

  // click event
  const clickHandler = () => {
    updateDisabled(true)
    // emit('clickEvent', isDisabled.value);
  }

  // watch props ['disabled']
  const { disabled } = toRefs(props);
  watch(disabled, () => {
    updateDisabled(props.disabled)
  });

</script>