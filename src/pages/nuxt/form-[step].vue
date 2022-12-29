<template>
  <div>
    <TemplatesBreadcrumbs
      :items="breadCrumbsContents"
    />

    <!-- steps -->
    <ul class="steps container steps-vertical sm:steps-horizontal">
      <li class="step step-primary">
        <NuxtLink to="/nuxt/form-1">
          Register
        </NuxtLink>
      </li>
      <li class="step step-primary">Choose plan</li>
      <li class="step">Purchase</li>
      <li class="step">Receive Product</li>
    </ul> <!-- steps -->

    <form
      method="get"
      :action="`/nuxt/form-${step}`"
      @submit.prevent="submit"
    >

      <div class="card container bg-base-300 my-16 py-8">
        <!-- text input -->
        <div class="form-control w-full max-w-md">
          <label class="label">
            <span class="label-text">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here" class="input w-full" />
          <label class="label">
            <span class="label-text-alt">Alt label</span>
          </label>
        </div> <!-- text input -->
        <!-- text input -->
        <div class="form-control w-full max-w-md">
          <label class="label">
            <span class="label-text">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here" class="input w-full" />
          <label class="label">
            <span class="label-text-alt">Alt label</span>
          </label>
        </div> <!-- text input -->

        <!-- select -->
        <div class="form-control w-full max-w-md">
          <label class="label">
            <span class="label-text">Pick the best fantasy franchise</span>
          </label>
          <select class="select">
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
          <label class="label">
            <span class="label-text-alt">Alt label</span>
          </label>
        </div> <!-- select -->

        <div class="divider">Optional below</div> 

        <!-- toggle -->
        <div class="flex flex-col">
          <div class="form-control w-52">
            <label class="cursor-pointer label">
              <span class="label-text">Remember me</span> 
              <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
          </div>
          <div class="form-control w-52">
            <label class="cursor-pointer label">
              <span class="label-text">Remember me</span> 
              <input type="checkbox" class="toggle toggle-secondary" disabled checked />
            </label>
          </div>
        </div> <!-- toggle -->
      </div>

      <button class="btn btn-outline btn-success ">
        Confirm on next page
      </button>
      
    </form>

  </div>
</template>


<script lang="ts" setup>
  import breadCrumbsItems from "~~/configs/components/templates/breadCrumbs/nuxtForm";

  const submit = () => {
    console.log('submit')
  }

  if(process.client) { 
    document.addEventListener("keyup", function(event) {
      if (event.code === 'Enter') submit()
    });
  }


  definePageMeta({
    layout: 'nuxt',
  });

  const route = useRoute();
  const step = ref(route.params.step)
  console.log(step.value)

  // Breadcrumbs
  const breadCrumbsContents = reactive(breadCrumbsItems);


</script>