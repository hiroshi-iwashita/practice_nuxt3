<template>
  <div>
    <!-- breadcrumbs -->
    <TemplatesBreadcrumbs
      :items="breadCrumbs"
    /> <!-- breadcrumbs -->
    
    <!-- button - icon -->
    <template class="flex justify-end">
      <ElementsButtonIcon
        @on-btn-click="clickHandler"
      />
    </template> <!-- button - icon -->

    <!-- modal -->
    <LazyTemplatesModal
      :model-value="isShowingModal"
      @update:model-value="toggleIsShowingModal"
    >
      <!-- modal contents -->
      <LazyViewsNuxtFormModals
        :index="whichModalToShow"
      />
    </LazyTemplatesModal> <!-- modal -->

    <!-- steps -->
    <TemplatesSteps
      :items="steps"
      :current-step="step"
    /> <!-- steps -->

    <!-- view for forms -->
    <ViewsNuxtFormForms
      :step="step"
      :steps="steps"
      class="my-8"
    >
      <TemplatesForm
        :forms="forms[step-1]"
        @update:model-value="updateHandler"
      />

      <!-- <TemplatesForm
        v-if="step === 1"
        :forms="forms[step-1]"
        @update:model-value="updateHandler"
      />
      <TemplatesForm
        v-if="step === 2"
        :forms="forms[step-1]"
        @update:model-value="updateHandler"
      />
      <TemplatesForm
        v-if="step === 3"
        :forms="forms[step-1]"
        @update:model-value="updateHandler"
      /> -->

    </ViewsNuxtFormForms> <!-- view for forms -->
  </div>
</template>

<script lang="ts" setup>
  import breadCrumbsItems from "~~/configs/components/templates/breadCrumbs/nuxtForm";
  import stepsItems from "~~/configs/components/templates/steps/nuxtForm";
  import formsItems from "~~/configs/components/templates/forms/nuxtForm";

  definePageMeta({
    layout: 'nuxt',
  });
  
  // TemplatesBreadcrumbs
  const breadCrumbs = reactive(breadCrumbsItems);
  // TemplatesBreadcrumbs
  
  // ElementsButtonIcon
  const clickHandler = (...args: Array<string>) => {
    console.log(args)
    toggleWhichModalToShow(0)
    toggleIsShowingModal()
  }
  // ElementsButtonIcon

  // modal
    // TemplatesModal
  const isShowingModal = ref<boolean>(false)
  const toggleIsShowingModal = () => {
    isShowingModal.value = !isShowingModal.value
  }
    // TemplatesModal

    // ViewsNuxtFormModals
  const whichModalToShow = ref<number>(0)
  const toggleWhichModalToShow = (index: number) => {
    whichModalToShow.value = index
  }
    // ViewsNuxtFormModals
  // modal

  // TemplatesSteps
  const steps = reactive(stepsItems)
  const step = ref<number>(1)
  // TemplatesSteps
  
  // ViewsNuxtFormForms
    // TemplatesForm
  const forms = reactive(formsItems);
  const payload = <object>ref({});

  const updateHandler = (...args: Array<string | object>) => {
    console.log(args)
    let action = <string>args[0];
    let value = <object>args[1];

    payload.value = value
    console.log(payload.value)

    switch (action) {
      case 'previous':
        console.log('previous');
        step.value--;
        break;
      case 'next':
        console.log('next');
        step.value++;
        break;
      case 'confirm':
        console.log('confirm');
        toggleWhichModalToShow(1)
        toggleIsShowingModal()
        break;
      default:
        console.log(`Your action is ${action} but it is not assigned`);
    }
  }
    // TemplatesForm
  // ViewsNuxtFormForms

</script>