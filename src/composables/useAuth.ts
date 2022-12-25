import { TUser } from "~~/types/TUser";

export async function registerWithEmail(
    email: TUser['email'],
    password: TUser['password']
) {
    try {
        const { data, pending, error, refresh } = await useFetch<TUser>(
            'http://localhost:8080/users/all'
            // , {
            //     pick: ['data'],
            // }
        )
        // console.log(data)
        // console.log(pending)
        // console.log(error)
        // console.log(refresh)
        // const res = JSON.parse(data.value)

        return {
            data,
            pending,
            error,
            refresh
        }
    
    } catch (e) {
        console.log('error: ' + e)
    }
}