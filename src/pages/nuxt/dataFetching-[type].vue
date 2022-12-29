<template>
  <div>
    <TemplatesBreadcrumbs
      :items="breadCrumbsContents"
    />

    <div class="flex justify-between items-center mb-1">
      <div class="tabs flex-1">
        <NuxtLink class="tab tab-lg tab-lifted" id="tab-users" to="/nuxt/dataFetching-users">Users</NuxtLink> 
        <NuxtLink class="tab tab-lg tab-lifted" id="tab-comments" to="/nuxt/dataFetching-comments">Comments</NuxtLink> 
        <NuxtLink class="tab tab-lg tab-lifted" id="tab-photos" to="/nuxt/dataFetching-photos">Photos</NuxtLink>
      </div>

      <input
        class="input input-md w-1/2 max-w-md bg-base-300 mx-4"
        v-model="formTextInput.value"
        :type="formTextInput.type"
        :name="formTextInput.name"
        :placeholder="formTextInput.placeholder"
        :required="formTextInput.isRequired"
        :disabled="formTextInput.isDisabled"
        @input="filtering"
      />

      <button
        class="btn btn-primary btn-outline"
        :disabled="pending"
        @click="refresh"
      >
        Refresh
      </button>
    </div>

    <TemplatesProgressModal
      v-show="pending"
      :type="pregressModal.type"
      :model-value="pregressModal.isShowing"
    />

    <div v-show="!pending">
      <div v-if="error">{{ error }}</div>
      <div v-else>

        <!-- user table, comments-->
        <TemplatesTable
          v-if="type === 'users' || type === 'comments'"
          :is-over-flow="templatesTable.isOverFlow"
          :is-compact="templatesTable.isCompact"
          :width="templatesTable.width"
          :heads="templatesTable.heads"
          :foots="templatesTable.foots"
          :bodies="templatesTable.bodies"
        />

        <!-- photos -->
        <div
          v-if="type === 'photos'"
        >
          <div class="grid grid-cols-3 gap-4">
            <template
              v-for="(item, index) in data"
              :key="index"
            >
              <div class="card w-96 bg-base-100 shadow-xl">
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
            </template>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
  import { TTemplatesTable } from "~~/types/components/templates/TTemplatesTable";
  import breadCrumbsItems from "~~/configs/components/templates/breadCrumbs/nuxtDataFetching";
  import tableItems from "~~/configs/components/templates/table/nuxtDataFetching";

  definePageMeta({
    layout: 'nuxt',
  });

  onBeforeRouteUpdate(async (to, from) => {
    type.value = to.params.type
    if(to.params.type !== from.params.type) data.value = null
  })

  const route = useRoute();
  const type = ref(route.params.type)

  // tabs
  const removeClass = (previousType) => {
    let tab = document.getElementById(`tab-${previousType}`);
    console.log(tab)
    tab.classList.remove("tab-active");
  }
  
  const addClassToSelectedTab = (NextType) => {
    let tab = document.getElementById(`tab-${NextType}`);
    console.log(tab)
    tab.classList.add('tab-active');
    console.log(tab)
  }

  // Breadcrumbs
  const breadCrumbsContents = reactive(breadCrumbsItems);

  // data fetching
  const {
    data,
    refresh,
    error,
    pending
  } = await useLazyFetch(`/api/jsonplaceholder/${type.value}`)
  // console.log(useNuxtApp().payload.data);

  // TemplatesProgressModal
  const pregressModal = reactive({
    type: 'bar',
    isShowing: pending
  })

  // text input
  const formTextInput = reactive({
    value: <string>'',
    type: <string>'text',
    name: <string>'',
    placeholder: <string>'Search',
    isRequired: <boolean>false,
    isDisabled: pending
  })

  // filter
  const filtering = () => {
    let filtered;
    filtered = filterData(formTextInput.value)
    updateData(filtered)
  }

  const filterData = (value: string) => {
    let res = data.value.filter(item => item.name.indexOf(value) !== -1);
    return res;
  }

  const updateData = (value: object[]) => {
    if(!value.length) templatesTable.bodies = data
    else templatesTable.bodies = value
  } // filter // text input

  // TemplatesTable - users, comments
  const templatesTable = reactive<TTemplatesTable>(
    type.value === 'users'
    ? tableItems[`users`]
    : tableItems[`comments`]
  )
  templatesTable.bodies = data

</script>
