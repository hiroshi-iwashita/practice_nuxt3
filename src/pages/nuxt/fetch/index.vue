<template>
  <div>
    <h1 class="text-xl">
      Fetch data test page
    </h1>
    
    <!-- <div
      v-for="(item, index) in a" :key="index"
    >
      {{ item.last_name }}
    </div> -->
    <div>
      {{ users }}
    </div>
    <div v-if="pending">
      <h1>Pending ......</h1>
    </div>
    <div v-else>
      <div v-if="error">
        {{ error }}
      </div>

      <button
        class="btn btn-primary btn-outline"
        @click="refresh"
      >
        Refresh data
      </button>

      <div
        v-for="(item, id) in data" :key="id"
      >
        <!-- comment -->
        <div>
          {{ item }}
        </div>

        <!-- photo -->
        <!-- <p>{{ item.id }}. {{ item.title }}</p>
        <img :src="item.url" :alt="item.title">
        <img :src="item.thumbnailUrl" :alt="item.title">
        <br> -->
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
  definePageMeta({
    layout: 'daisyui',
  });

  useHead({
    title: 'Fetch test',
    meta: [
      { name: 'description', content: 'Fetch data test'}
    ]
  })

  // route path
  const { path } = useRoute();

  // config apiBaseURL
  const {apiBaseURL} = useRuntimeConfig()

  if (process.server) {
    console.log("SSR") 
    console.log('API URL:', apiBaseURL)
  }
  else if (process.client) {
    console.log("SPA")
    console.log(path)
    // console.log(window.__NUXT__)
    // console.log(useNuxtApp().payload.data);

  }

  const {
    data,
    refresh,
    error,
    pending
  } = await useFetch(()=>`/api/jsonplaceholder/users`,
    {
      lazy: true,
      server: true,
    }
  )

  // const products = ref([])
  // onMounted(() => {
  //   fetch(`http://localhost:8080/users/all`)
  //   .then(res => res.json())
  //   .then(data => products.value = data)
  // });
  
  // const defaultUser = () => (
  //   { name: 'no name', email: 'info@example.com' }
  // )

  const {
    data: users,
    // pending,
    // error,
    // refresh
  } = await useFetch(() => `/users/all`,
    {
      baseURL: 'http://localhost:8080',
      lazy: true,
      server: false,
      // default: defaultUser,
      pick: ['data']
    }
  );

  // const a = ref([])
  // const {
  //   data: products,
  //   pending,
  //   error,
  //   refresh
  // } = await useLazyAsyncData(
  //   'products',
  //   () => {
  //     return $fetch('http://localhost:8080/users/all',
  //       {
  //         pick: ['data']
  //       }
  //     )
  //     .then(res => 
  //       // console.log(res)
  //       // console.log(res.data['users'])
  //       a.value = res.data['users']
  //       // return res.data['users']
  //     )
  //   }
  // )

  
  // const {
  //   data: products,
  //   pending,
  //   error,
  //   refresh
  // } = await useAsyncData(() => `fajsdk`, `/users/all`,
  //   {
  //     baseURL: 'http://localhost:8080'
  // //       pick: ['data'],
  // //       initialCache: false
  //   }
  // );


</script>
  