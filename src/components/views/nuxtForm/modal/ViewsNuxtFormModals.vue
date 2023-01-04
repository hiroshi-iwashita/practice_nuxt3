<template>
  <!-- progress modal -->
  <TemplatesModalProgress
    v-if="isProgress"
  />
  <!-- code mockup -->
  <ViewsNuxtFormModalCodeMockup
    v-if="index === 0"
  />

  <!-- to conform forms -->
  <ViewsNuxtFormModalConfirm
    v-if="index === 1"
    @click="clickHandler($event)"
  />
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    index: number
  }
  const props = withDefaults(
    defineProps<Props>(), {
      index: 0
    }
  );

  // ElementsProgressBar
  const isProgress = ref<boolean>(false)
  const toggleIsProgress = () => {
    isProgress.value = !isProgress.value
  }

  // click event
  const clickHandler = (event: string) => {
    console.log(event)
    toggleIsProgress()
  }
</script>
