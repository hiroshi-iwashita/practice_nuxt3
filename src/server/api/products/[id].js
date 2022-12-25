export default defineEventHandler(async (event) => {
    const { id } = event.context.params
    console.log(id)

    // handle query params
    const { name } = useQuery(event)
    console.log(name)

    const uri = `https://fakestoreapi.com/products/${id}`
    
    const { data } = await $fetch(uri)
  
    return data
})