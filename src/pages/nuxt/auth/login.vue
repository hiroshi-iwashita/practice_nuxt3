<template>
    <NuxtLayout name="daisyui">
        <template #footer>
            <LayoutAuthLoginFooter
                class="container"
            />
        </template>

        <div class="container">
            <h1 class="text-xl">
                Login
            </h1>
            <hr>

            <FormTag
                :method="formTag.method"
                :action="formTag.action"
                :name="formTag.name"
                :event="formTag.event"
                class="needs-validation"
                novalidate
                @form-event="submitHandler($event)"
            >
                <FormTextInput
                    v-for="(formTextInput, index) in formTextInputs" 
                    :key="index"
                    :model-value="formTextInput.value"
                    :type="formTextInput.type"
                    :name="formTextInput.name"
                    :label-top="formTextInput.labelTop"
                    :placeholder="formTextInput.placeholder"
                    :is-required="formTextInput.isRequired"
                    :is-disabled="formTextInput.isDisabled"
                    :label-bottom="formTextInput.labelBottom"
                    :width="formTextInput.width"
                    :max-width="formTextInput.maxWidth"
                    @update:model-value="testFormTextInput($event, index)"
                />
               
                <input
                    type="submit"
                    class="btn btn-primary btn-wide"
                    value="login"
                />

            </FormTag>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: false,
    });

    // config
    const config = useRuntimeConfig();

    // FormTag
    const formTag = reactive({
        method: <string>'post',
        action: <string>'/auth/login',
        name: <string>'login',
        event: <string>'login'
    })
    
    // FormTextInput
    const formTextInputs = reactive([
        {
            value: <string>'edsoif@dfj.com',
            type: <string>'email',
            name: <string>'email',
            labelTop: <string>'Email',
            placeholder: <string>'Type here',
            isRequired: <boolean>true,
            isDisabled: <boolean>false,
            labelBottom: <string>'required',
            width: <string>'full',
            maxWidth: <string>'xs',
        },
        {
            value: <string>'password',
            type: <string>'password',
            name: <string>'password',
            labelTop: <string>'Password',
            placeholder: <string>'Type here',
            isRequired: <boolean>true,
            isDisabled: <boolean>false,
            labelBottom: <string>'required',
            width: <string>'full',
            maxWidth: <string>'xs',
        }
    ])

    const testFormTextInput = (v: string, i: number) => {
        formTextInputs[i].value = v
        // console.log(formTextInputs[i].value)
    }

    // // FormSelect
    const formSelect = reactive({
        value: <string>'',
        name: <string>'',
        options: [
            'test01',
            'test02',
            'test03'
        ],
        labelTop: <string>'Last Name',
        placeholder: <string>'Type here',
        isRequired: <boolean>true,
        isDisabled: <boolean>false,
        labelBottom: <string>'required',
        width: <string>'60',
        maxWidth: <string>'xs',
    })
    const testFormSelect = (v: string) => {
        console.log(v)
    }

    // // FormCheckbox
    const formCheckbox = reactive({
        value: <boolean>false,
        labelTop: <string>'Last Name',
        isRequired: <boolean>true,
        isDisabled: <boolean>false,
        labelBottom: <string>'required',
    })
    const testFormCheckbox = (v: boolean) => {
        console.log(v)
    }

    // FormButton
    const formButton  = reactive({
        value: <string>'login',
        disabled: <boolean>false,
    })
    const testFormButton = (v: boolean) => {
        formButton.disabled = v
    }

    const ableFormButton = () => {
        formButton.disabled = false
    }

    const submitHandler = async (v: string) => {
        const payload = {
            email: <string>formTextInputs[0].value,
            password: <string>formTextInputs[1].value
        }

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        }

        console.log(JSON.stringify(payload))

        fetch(
            `${config.APIBaseURL}/auth/login`,
            requestOptions
        )
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                console.log("Error:", data.message);
            } else {
                console.log(data)
            }
        })
        
    }
</script>