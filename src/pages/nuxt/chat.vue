<template>
  <div>
    <TemplatesBreadcrumbs
      :items="breadCrumbsContents"
    />

    <!-- chat bubble -->
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div class="chat-header">
        Obi-Wan Kenobi
        <time class="text-xs opacity-50">12:45</time>
      </div>
      <div class="chat-bubble">You were the Chosen One!</div>
      <div class="chat-footer opacity-50">
        Delivered
      </div>
    </div>
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div class="chat-header">
        Anakin
        <time class="text-xs opacity-50">12:46</time>
      </div>
      <div class="chat-bubble">I hate you!</div>
      <div class="chat-footer opacity-50">
        Seen at 12:46
      </div>
    </div>

    

  </div>
</template>


<script lang="ts" setup>
  import breadCrumbsItems from "~~/configs/components/templates/breadCrumbs/nuxtChat";

  definePageMeta({
    layout: 'nuxt',
  });

  // Breadcrumbs
  const breadCrumbsContents = reactive(breadCrumbsItems);


</script>