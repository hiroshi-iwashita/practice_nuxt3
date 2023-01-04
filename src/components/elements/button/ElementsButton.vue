<template>
  <button
    :type="type"
    :disabled="isDisabled"
    class="btn"
    :class="classObject"
    @click="clickHandler"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
  import { TElementsButton } from "~~/types/components/elements/button/TElementsButton";

  // prop
  interface Props {
    type: TElementsButton['type'];
    text: TElementsButton['text'];
    color?: TElementsButton['color'];
    isDisabled?: TElementsButton['isDisabled'];
    isLoading?: TElementsButton['isLoading'];
  }
  const props = withDefaults(
    defineProps<Props>(), {
      text: 'button',
      color: 'primary',
      isDisabled: false,
      isLoading: false
    }
  );

  // emit
  interface Emits {
    (e: 'click', type: TElementsButton['type']): void;
  }
  const emit = defineEmits<Emits>();

  // isDisabled - update
  const isDisabled = ref(props.isDisabled);
  const onUpdateDisabled = (tf: boolean) => {
    isDisabled.value =tf
  }

  // isLoading - update
  const isLoading = ref(props.isLoading);
  const onUpdateLoading = (tf: boolean) => {
    isLoading.value =tf
  }

  // click event
  const clickHandler = () => {
    onUpdateDisabled(true)
    onUpdateLoading(true)
    emit('click', props.type);
  }

  // classObject
  const classObject = computed(() => {
    return {
      // color
      'btn-primary' : props.color === 'primary',
      'btn-neutral' : props.color === 'neutral',
      // loading
      'loading' : isLoading.value === true,
    }
  })

</script>