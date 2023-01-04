<template>
  <button
    class="btn"
    :class="classObject"
    @click="clickHandler"
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
  </button>
</template>

<script lang="ts" setup>
  import { TElementsButtonIcon } from "~~/types/components/elements/button/TElementsButtonIcon";

  // prop
  interface Props {
    type?: TElementsButtonIcon['type'];
    size?: TElementsButtonIcon['size'];
    color?: TElementsButtonIcon['color'];
    isOutline?: TElementsButtonIcon['isOutline'];
  }
  const props = withDefaults(
    defineProps<Props>(), {
      type: 'circle',
      size: 'sm',
      color: 'neutral',
      isOutline: true
    }
  );

  // emit
  interface Emits {
    (e: 'onBtnClick', type: TElementsButtonIcon['type']): void;
  }
  const emit = defineEmits<Emits>();

  // isDisabled - update
  // const isDisabled = ref(props.isDisabled);
  // const onUpdateDisabled = (tf: boolean) => {
  //   isDisabled.value =tf
  // }

  // isLoading - update
  // const isLoading = ref(props.isLoading);
  // const onUpdateLoading = (tf: boolean) => {
  //   isLoading.value =tf
  // }

  // click event
  const clickHandler = () => {
    // onUpdateDisabled(true)
    // onUpdateLoading(true)
    emit('onBtnClick', props.type);
  }

  // classObject
  const classObject = computed(() => {
    return {
      // type
      'btn-circle' : props.type === 'circle',
      'btn-square' : props.type === 'square',
      // size
      'btn-xs' : props.size === 'xs',
      'btn-sm' : props.size === 'sm',
      'btn-md' : props.size === 'md',
      'btn-lg' : props.size === 'lg',
      // color
      'btn-primary' : props.color === 'primary',
      'btn-neutral' : props.color === 'neutral',
      // outline
      'btn-outline' : props.isOutline === true
    }
  });

</script>