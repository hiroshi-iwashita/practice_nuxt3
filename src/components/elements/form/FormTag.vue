<template>
  <form 
    :ref="name"
    autocomplete="off"
    :method="method" 
    :action="action" 
    :event="event"
    class="needs-validation" 
    novalidate
    @submit.prevent="submit"
  >
    <slot></slot>
  </form>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    method: string;
    action: string;
    name?: string;
    event: string;
  }
  const props = withDefaults(
    defineProps<Props>(), {
      method: '',
      action: '',
      name: '',
      event: ''
    }
  );

  // emit
  interface Emits {
    (e: 'formEvent', text: string): void;
  }
  const emit = defineEmits<Emits>();

  // submit
  const submit = () => {
    const root = ref(null)
    // console.log(root.value)
    let myForm = root
    // console.log("My event name:", props['event'])
    // console.log("Name:", props['name'])
    emit('formEvent', props['event']);
  }
</script>