<template>
  <div
    :class="classObject"
  >
    <!-- <Breadcrumbs /> -->

    <h1 class="text-xl">
      Home
    </h1>
    <!-- <div v-if="pending">
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
    </div> -->
  </div>
</template>

<script lang="ts" setup>
  import { TUser } from "~~/types/TUser";
  import { registerWithEmail } from "~/composables/useAuth";

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

  const { APIBaseURL } = useRuntimeConfig();
  const { path } = useRoute();
  // console.log(path)

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

  // const { data: users, pending, error, refresh } = await useLazyFetch(
  //   `${APIBaseURL}/users/all`,
  //   {
  //       pick: ['data']
  //   }
  // )

  const email = ref<TUser['email']>("");
  const password = ref("");
  let response;
  let error;

  const postRegisterForm = (async() => {
    return await registerWithEmail(email.value, password.value)
    .then(res => {
      console.log(res.data)
      
      // error = res.error
    })
  });
  postRegisterForm()

  // watch(users, (newUsers) => {
  // //     // Because posts starts out null, you will not have access
  // //     // to its contents immediately, but you can watch it.
  //     console.log(users.value)
  //     console.log(newUsers)
  // })

 
</script>
