<template>
  <div>
    <PageBreadcrumbs
      :contents="breadcrumbsContents"
    />

    <div class="tabs">
      <a class="tab tab-lifted">Tab 1</a> 
      <a class="tab tab-lifted tab-active">Tab 2</a> 
      <a class="tab tab-lifted">Tab 3</a>
    </div>

    <div v-if="pending">Loading......</div>
    <div v-else>
      <div v-if="error">{{ error }}</div>
      <div v-else>
        <!-- comments -->
        <div
          v-for="(item, id) in data"
          :key="id"
        >
          <p>
            {{ item.id }}. {{ item.name }}
          </p>
          <p>
            {{ item.email }}
          </p>
          <p>
            {{ item.body }}
          </p>
          <br>
        </div>

        <!-- photos -->
        <!-- <div
          class="
            grid grid-cols-2 lg:grid-cols-3 hover:grid-cols-4 gap-4
          "
        >
          <div
            v-for="(item, index) in data" :key="index"
          >
          <div class="card bg-base-300 shadow-xl opacity-75">
            <figure><img :src="item.thumbnailUrl" :alt="item.title" /></figure>
            <div class="card-body">
              <h2 class="card-title">
                {{ item.title }}
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div> 
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
        
      </div>
    </div>
    
  </div>
</template>


<script lang="ts" setup>
  import breadCrumbsContents from "~~/configs/components/breadCrumbs";

  definePageMeta({
    layout: 'nuxt',
  });

  // Breadcrumbs
  const breadcrumbsContents = reactive(breadCrumbsContents.nuxtDataFetching);

  const {
    data,
    refresh,
    error,
    pending
  } = await useLazyFetch(()=>`/api/jsonplaceholder/comments`)


  // console.log(useNuxtApp().payload.data);

</script>
