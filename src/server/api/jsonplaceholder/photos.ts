import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const result = await $fetch('https://jsonplaceholder.typicode.com/photos')
    console.log(result)
    return result
}