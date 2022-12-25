<template>
    <div>
        <div>
            This is about page
        </div>
        <p>ユーザーID: {{ user.id }}</p>
        <p>ユーザー名: {{ user.name }}</p>
        <p>メールアドレス: {{ user.mail }}</p>

        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: 'daisyui',
    });
    const user = useLoginUser();


    // fetch server api
    const { data: message } = await useFetch('/api/about')
    // const { data: message } = await useFetch('/api/ninja?name=mario', {
    //     method: 'post',
    //     body: {age: 30}
    // })

</script>