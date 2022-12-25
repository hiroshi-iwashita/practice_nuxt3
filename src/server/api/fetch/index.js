// export default defineEventHandler(() => 'Hello World in routes!')

export default defineEventHandler(async (event) => {

    // const { code } = event.context.params
    const { apiBaseURL } = useRuntimeConfig()
    // console.log(apiBaseURL)

    // const uri = `${apiBaseURL}/user/all`
  
    // const { data } = await $fetch(uri)

    // const {
    //         data,
    //         pending,
    //         error,
    //         refresh
    //     } = await $fetch(() => `/users/all`,
    //       {
    //         baseURL: apiBaseURL,
    //         lazy: true,
    //         server: true,
    //         pick: ['data']
    //       }
    // );

    // const { data, pending, error, refresh } = await useAsyncData(
    //     'mountains',
    //     () => $fetch(uri)
    //   )

    const uri = `${apiBaseURL}/users/all`
    console.log(uri)

    const { data } = await $fetch(uri)

    if (process.server) console.log(data);

    // const data = 'Hello World in fetch api!'
    return data
})