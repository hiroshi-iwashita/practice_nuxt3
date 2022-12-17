<template>
    <div>
        <div>
            This is about page
        </div>
        <p>ユーザーID: {{ user.id }}</p>
        <p>ユーザー名: {{ user.name }}</p>
        <p>メールアドレス: {{ user.mail }}</p>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: false,
    });
    const user = useLoginUser();
</script>