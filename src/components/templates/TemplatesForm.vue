<template>
  <div>
    <form
      method="get"
      :action="`/nuxt/form-1`"
      @submit.prevent="submitHandler"
    >
      <template
        v-for="(form, index) in props.forms"
        :key="index"
      >

        <ElementsFormTextInput
          v-if="form.type === 'textInput'"
          :model-value="form.value"
          :type="form.type"
          :name="form.name"
          :placeholder="form.placeholder"
          :is-required="form.isRequired"
          :is-disabled="form.isDisabled"
          :label-top="form.labelTop"
          :label-bottom="form.labelBottom"
          :width="form.width"
          :max-width="form.maxWidth"
          @update:model-value="updateHandler"
        />
          
        <ElementsFormSelect
          v-if="form.type === 'select'"
          :model-value="form.value"
          :name="form.name"
          :options="form.options"
          :placeholder="form.placeholder"    
          :is-required="form.isRequired"
          :is-disabled="form.isDisabled"
          :label-top="form.labelTop"
          :label-bottom="form.labelBottom"
          :width="form.width"
          :max-width="form.maxWidth"
          @update:model-value="updateHandler"
        />
          
        <ElementsFormCheckbox
          v-if="form.type === 'checkbox'"
          :model-value="form.value"
          :name="form.name"
          :is-disabled="form.isDisabled"
          :is-checked="form.isChecked"
          :label-top="form.labelTop"
          :label-bottom="form.labelBottom"
          @update:model-value="updateHandler"
        />

        <ElementsFormToggle
          v-if="form.type === 'toggle'"
          :model-value="form.value"
          :name="form.name"
          :is-disabled="form.isDisabled"
          :is-checked="form.isChecked"
          :label-top="form.labelTop"
          :label-bottom="form.labelBottom"
          @update:model-value="updateHandler"
        />
        
        <ElementsDivider
          v-if="form.type === 'divider'"
        >
          {{ form.text }}
        </ElementsDivider>

        <ElementsButtonPre
          v-if="form.type === 'btnPre'"
          :type="form.btnType"
          :text="form.text"
          :color="form.color"
          :is-disabled="form.isDisabled"
          :is-loading="form.isLoading"
          class="mx-2"
          @click="clickHandler($event)"
        />

        <ElementsButton
          v-if="form.type === 'btn'"
          :type="form.btnType"
          :text="form.text"
          :color="form.color"
          :is-disabled="form.isDisabled"
          :is-loading="form.isLoading"
          class="mx-2"
          @click="clickHandler($event)"
        />
    
      </template>
    </form>
  </div>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    forms: Array<any>
  };

  const props = withDefaults(
    defineProps<Props>(), {
      forms: () => []
    }
  );

  // console.log(props.forms)

  const filterdForms: Array<object> = reactive(
    props.forms.filter((form) => Object.keys(form).indexOf('name') !== -1)
  )

  const a: Array<string> = reactive([]);

  for(let i=0; i<filterdForms.length; i++) {
    let name: string = filterdForms[i].name;
    let value: string = filterdForms[i].value;
    let ary: Array<string> = new Array;
    ary[0] = name
    ary[1] = value
    a.push(ary)
  }

  const entries = new Map(a);
  const form = reactive(Object.fromEntries(entries));

  // emit
  interface Emits { 
    (e: 'submit', text: string): void;
  }
  const emit = defineEmits<Emits>();

  const updateHandler = (...args: Array<string>) => {
    // console.log(args)
    let key: string = args[0];
    let value: string = args[1];
    form[key] = value
    console.log(form)
  }

  const submitHandler = () => {
    console.log('submit')
  }
  
  const clickHandler = (event: string) => {
    console.log(`clicked: ${event}`)
    emit('update:modelValue', event, form)
  }

</script>
