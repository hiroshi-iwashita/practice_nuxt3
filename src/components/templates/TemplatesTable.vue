<template>
  <div :class="{'overflow-auto' : isOverFlow}">
    <table
      class="table"
      :class="{
        'table-compact' : isCompact,
        'w-full' : width === 'full'
      }"
    >
      <thead>
        <tr>
          <th
            v-for="(head, index) in heads"
            :key="index"
          >
            <ElementsTableHeadText
              v-if="head.type === 'text'"
              :text="head.text"
            />
            <ElementsTableHeadCheckbox
              v-if="head.type === 'checkbox'"
              :text="head.text"
              :model-value="isCheckAll"
              @update:model-value="onUpdateSelectedAll($event)"
            />
          </th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th
            v-for="(foot, index) in foots"
            :key="index"
          >
            <ElementsTableFootText
              v-if="foot.type === 'text'"
              :text="foot.text"
            />
            <ElementsTableFootCheckbox
              v-if="foot.type === 'checkbox'"
              :text="foot.text"
              :model-value="isCheckAll"
              @update:model-value="onUpdateSelectedAll($event)"
            />
          </th>
        </tr>
      </tfoot>
      <tbody>
        <template
          v-for="(body, index) in bodies"
          :key="index"
        >
          <ElementsTableBody
            :hover="hover"
            :body="body"
            :model-value="isSelected"
            @update:model-value="onUpdateSelected($event)"
          />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { TTemplatesTable } from "~~/types/components/templates/TTemplatesTable";

  // prop
  interface Props {
    isOverFlow?: TTemplatesTable["isOverFlow"]
    isCompact?: TTemplatesTable["isCompact"]
    width?: TTemplatesTable["width"]
    hover?: TTemplatesTable["hover"]
    heads: TTemplatesTable["heads"]
    foots: TTemplatesTable["foots"]
    bodies: TTemplatesTable["bodies"]
  }

  const props = withDefaults(
    defineProps<Props>(), {
      isOverFlow: true,
      isCompact: true,
      width: 'full',
      hover: true,
      heads: () => [],
      foots: () => [],
      bodies: () => [],
    }
  );

  // initialize selected for each item
  const isSelected = ref(false)

  // list of selected items
  const selectedList = reactive([])

  // for checkbox in head, foot
  const isCheckAll = ref(false)

  // head, foot
  // onUpdateSelectedAll
  const onUpdateSelectedAll = (event: boolean) => {
    toggleSelectedAll(event)
  }

  // toggleSelectedAll
  const toggleSelectedAll = (tof: boolean) => {
    if (tof) onSelectedAll()
    else offSelectedAll()
    toggleIsSelected(tof)
  }

  // toggle isSelected.value
  const toggleIsSelected = (tof: boolean) => {
    isSelected.value = tof
  } // toggle isSelected.value

  const offSelectedAll = () => {
    selectedList.splice(0)
    isCheckAll.value = false
  }

  // onSelectedAll
  const onSelectedAll = () => {
    isCheckAll.value = true
    addAll()
  }
  
  const addAll = () => {
    let all = createNotSeletedList()
    for(let i=0; i<all.length; i++) {
      selectedList.push(all[i])
    }
  }

  const createNotSeletedList = () => {
    let mappedBodies = mapBodies(props.bodies)
    let notSelected = mappedBodies.filter(id => id !== selectedList);
    return notSelected
  }

  const mapBodies = (value) => {
    return value.map((item) => {
      return item.id;
    });
  } // onSelectedAll // toggleSelectedAll // onUpdateSelectedAll // head, foot

  // body
  // ElementsTableBody
  const onUpdateSelected = (event) => {
    if(event.value) addSelected(event.id)
    else removeSelected(event.id)
  }
  const removeSelected = (id: string) => {
    let valueToRemove = selectedList.indexOf(id);
    selectedList.splice(valueToRemove, 1)
  }
  const addSelected = (id: string) => {
    selectedList.push(id)
  }

</script>
