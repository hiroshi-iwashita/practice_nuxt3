<template>
  <tr class="hover">
    <th>
      <label>
        <input
          v-model="modelValue"
          type="checkbox"
          class="checkbox"
        />
      </label>
    </th>
    <th>{{ body.id }}</th>
    <td>{{ body.name }}</td>
    <td>{{ body.email }}</td>
    <td>
      {{ body.body }}
      <!-- {{ body.address.suite }}
      {{ body.address.street }}
      {{ body.address.city }}
      {{ body.address.zipcode }} -->
    </td>
  </tr>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    hover?: boolean
    body: object
    modelValue: boolean;
  }

  const props = withDefaults(
    defineProps<Props>(), {
      hover: true,
      body: () => {},
      modelValue: false,
    }
  );

  // emit
  interface Emits {
    (e: 'update:modelValue', text: object): void;
  }
  const emit = defineEmits<Emits>();

  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit(
      'update:modelValue',
      {
        id: props.body.id,
        value: value
      }
    )
  });

</script>
