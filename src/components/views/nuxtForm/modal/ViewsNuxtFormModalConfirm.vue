<template>
  <div>
    <p class="font-bold text-lg">
      {{ title }}
    </p>
    <ElementsDivider></ElementsDivider>
    <p
      v-for="(text, index) in texts" :key="index"
      class="mb-4"
    >
      {{ text }}
    </p>
    <div class="modal-action">
      <!-- <label for="my-modal" class="btn">Yay!</label> -->
      <ElementsButton :type="'submit'" :text="'submit'" @click="clickHandler"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { TTemplatesSteps } from "~~/types/components/templates/TTemplatesSteps";

  // prop
  interface Props {
    title: string;
    texts: Array<string>;
  }
  const props = withDefaults(
    defineProps<Props>(), {
      title: 'Congratulations random Internet user!',
      texts: () => [
        "You've been selected for a chance to get one year of subscription to use Wikipedia for free!",
        "You've been selected for a chance to get one year of subscription to use Wikipedia for free!",
        "You've been selected for a chance to get one year of subscription to use Wikipedia for free!",
      ],
    }
  );

  // emit
  interface Emits {
    (e: 'click', type: string): void;
  }
  const emit = defineEmits<Emits>();

  // click event
  const clickHandler = () => {
    emit('click', 'submit');
  }
</script>
