import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const result = await $fetch('https://jsonplaceholder.typicode.com/comments')
    console.log(result)
    return result
}