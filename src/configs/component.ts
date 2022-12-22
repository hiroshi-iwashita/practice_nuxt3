// form
// FormTag
const FormTag = {
   html:  `
        <FormTag
            :method="formTag.method"
            :action="formTag.action"
            :name="formTag.name"
            :event="formTag.event"
            class="needs-validation"
            novalidate
            @form-event="submitHandler($event)"
        >
        </FormTag>
    `,
    script: `
        const formTag = reactive({
            method: <string>'',
            action: <string>'',
            name: <string>'',
            event: <string>''
        })
    `
};
// FormTextInput
const FormTextInput = {
   html:  `
        <FormTextInput
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
            @update:model-value="testFormTextInput($event)"
        />
    `,
    script: `
        const formTextInput = reactive({
            value: <string>'',
            type: <string>'',
            name: <string>'',
            labelTop: <string>'',
            placeholder: <string>'',
            isRequired: <boolean>,
            isDisabled: <boolean>,
            labelBottom: <string>'',
            width: <string>'',
            maxWidth: <string>'',
        })
    `
};

// FormSelect
const FormSelect = {
   html:  `
        <FormSelect
            :model-value="formSelect.value"
            :name="formSelect.name"
            :options="formSelect.options"
            :label-top="formSelect.labelTop"
            :placeholder="formSelect.placeholder"                    
            :is-required="formSelect.isRequired"
            :is-disabled="formSelect.isDisabled"
            :label-bottom="formSelect.labelBottom"
            :width="formSelect.width"
            :max-width="formSelect.maxWidth"
        @update:model-value="testFormSelect($event)"
    `,
    script: `
        const formSelect = reactive({
            value: <string>'',
            name: <string>'',
            options: [],
            labelTop: <string>'',
            placeholder: <string>'',
            isRequired: <boolean>,
            isDisabled: <boolean>,
            labelBottom: <string>'',
            width: <string>'',
            maxWidth: <string>'',
        })
    `
}

// FormCheckbox
const FormCheckbox = {
   html:  `
        <FormCheckbox
            :model-value="formCheckbox.value"
            :label-top="formCheckbox.labelTop"
            :is-required="formCheckbox.isRequired"
            :is-disabled="formCheckbox.isDisabled"
            :label-bottom="formCheckbox.labelBottom"
            @update:model-value="testFormCheckbox($event)"
        />
    `,
    script: `
        const formCheckbox = reactive({
            value: <boolean>,
            labelTop: <string>'',
            isRequired: <boolean>,
            isDisabled: <boolean>,
            labelBottom: <string>'',
        })
    `
}

// FormButton
const FormButton = {
    html:  `
        <FormButton
            :value="formButton.value"
            :is-disabled="formButton.isDisabled"
        />
     `,
     script: `
        const formButton  = reactive({
            value: <string>'login',
            isDisabled: <boolean>false,
        })
     `
 };