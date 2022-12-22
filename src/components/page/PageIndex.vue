<template>
  <div
    :class="classObject"
  >
    <Breadcrumbs />

    <h1 class="text-xl">
      Home
    </h1>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <div
        v-for="(user, index) in users"
        :key="index"
      >
        <p>
          {{user}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    container?: boolean
    paddingY?: string
  }

  const props = withDefaults(
    defineProps<Props>(), {
      container: true,
      paddingY: '4'
    }
  );

  // classObject
  const classObject = computed(() => {
    return {
      'container' : props.container === true,
      'py-4' : props.paddingY === '4',
    }
  })

  const config = useRuntimeConfig();
  const route = useRoute();
  console.log(route.path)

  // const { data: users, pending, error, refresh } = await useAsyncData(
  //     '/users/all',
  //     () => $fetch(`${config.APIBaseURL}/users/all`),
  //     {
  //         pick: ['data'],
  //         initialCache: false
  //     }
  // );

  // const { data: users, pending, error, refresh } = await useFetch(
  //     `${config.APIBaseURL}/users/all`,
  //     {
  //         pick: ['data'],
  //         initialCache: false
  //     }
  // );

  const { data: users, pending, error, refresh } = await useLazyFetch(
      `${config.APIBaseURL}/users/all`,
      {
          pick: ['data'],
          onResponse({ request, response, options }) {
              // Process the response data
              // console.log('[fetch response]', request, response.status, response.body)
              return response._data
          },
      }
  )

  watch(users, (newUsers) => {
  //     // Because posts starts out null, you will not have access
  //     // to its contents immediately, but you can watch it.
      console.log(users.value)
      console.log(newUsers)
  })

 
</script>
