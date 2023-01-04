<template>
  <button
    :type="type"
    class="btn btn-outline"
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
  }
  const props = withDefaults(
    defineProps<Props>(), {
      text: 'button',
      color: 'primary',
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
    emit('click', props.type);
  }

  // classObject
  const classObject = computed(() => {
    return {
      // color
      'btn-primary' : props.color === 'primary',
      'btn-neutral' : props.color === 'neutral',
    }
  })

</script>