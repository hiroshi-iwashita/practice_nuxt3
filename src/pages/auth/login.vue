<template>
    <NuxtLayout name="auth">
        <template #header>
            <LayoutAuthLoginHeader />
        </template>
        <template #footer>
            <LayoutAuthLoginFooter
                class="container"
            />
        </template>

        <div class="container">
            <h1 class="text-xl mb-16">
                Login
            </h1>
            <FormTextInput
                v-for="(form, index) in forms" 
                :key="index"
                :model-value="form.value"
                :label-top="form.labelTop"
                :placeholder="form.placeholder"
                :is-disabled="form.isDisabled"
                :label-bottom="form.labelBottom"
                :width="form.width"
                :max-width="form.maxWidth"
                @update:model-value="test($event, index)"
            />

        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: false,
    });

    // FormTextInput
    const forms = reactive([
        {
            value: <string>'',
            labelTop: <string>'First Name',
            placeholder: <string>'Type here',
            isDisabled: <boolean>false,
            labelBottom: <string>'required',
            width: <string>'full',
            maxWidth: <string>'xs',
        },
        {
            value: <string>'',
            labelTop: <string>'Last Name',
            placeholder: <string>'Type here',
            isDisabled: <boolean>false,
            labelBottom: <string>'required',
            width: <string>'full',
            maxWidth: <string>'xs',
        },
        {
            value: <string>'',
            labelTop: <string>'',
            placeholder: <string>'Type here',
            isDisabled: <boolean>true,
            labelBottom: <string>'',
            width: <string>'full',
            maxWidth: <string>'xs',
        }
    ])

    const test = (v: string, i: number) => {
        // console.log(v)
        // console.log(i)
        forms[i].value = v
        console.log(forms[i].value)
    }
</script>