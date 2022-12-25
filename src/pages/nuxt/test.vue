<template>
    <NuxtLayout name="daisyui">
        <template #header>
            <LazyLayoutDaisyuiTestHeader
                v-if="show"
            />
            <LayoutDaisyuiTestHeader />
        </template>
        <template #footer>
            <LayoutDaisyuiTestFooter
                class="container"
            />
        </template>

        <div class="container">
            <!-- progress bar -->
            <!-- <progress
                v-if="isBarloading"
                class="progress progress-accent w-56" 
            ></progress> -->

            <!-- alert -->
            <!-- <Alert
                :title = alertContent.title
                :description = alertContent.description
                :btn = alertContent.btn
                :btn-text = alertContent.btnText
            /> -->
            <button
                class="btn btn-base"
                @click="openAlert"
            >
                Open Alert
            </button>
            <component
                :is="
                    isAlert
                    ? Alert
                    : 'div'
                "
                :title = alertContent.title
                :description = alertContent.description
                :btn = alertContent.btn
                :btn-text = alertContent.btnText
            />

            <!-- Input and modal props update test -->
            <div class="flex justify-start items-center">
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    <span class="label-text-alt">Alt label</span>
                    </label>
                    <input
                        v-model="inputText"
                        @input="consoleInputText"
                        placeholder="Type here"
                        class="input input-bordered w-full max-w-xs"
                        disabled
                    />
                    <label class="label">
                        <span class="label-text-alt">required</span>
                        <span class="label-text-alt">Alt label</span>
                    </label>
                </div>
                <!-- The button to open modal -->
                <label
                    for="modal-edit-name"
                    class="btn btn-primary btn-outline ml-8"
                    @click="toggleIsModalOpen(true)"
                >
                    Edit
                </label>
            </div>

            <div v-show="isModalOpen">
                <input type="checkbox" id="modal-edit-name" class="modal-toggle" />
                <label for="modal-edit-name" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                        <label
                        for="modal-edit-name"
                        class="btn btn-sm btn-circle absolute right-4 top-4"
                        @click="resetEditName"
                    >
                        ✕
                    </label>
                        <h3 class="text-lg font-bold">
                            Edit your name
                        </h3>
                        <p class="py-4">
                            This modal is to edit your name.
                        </p>
                        <div class="modal-action">
                            <input
                                v-model="modalInputText"
                                @input="consoleModalInputText"
                                placeholder="Edit your name"
                                class="input input-bordered w-full max-w-xs"
                                :disabled="isFormDisabled"
                            />
                            <button
                                class="btn"
                                :class="EditNameModalClassObject"
                                @click="proceedEditName()"
                            >
                                Proceed
                            </button>
                            <!-- <label
                                for="modal-edit-name"
                                class="btn"
                                :class="EditNameModalClassObject"
                                @click="proceedEditName()"
                                >
                                Proceed
                            </label> -->
                        </div>
                    </label>
                </label>
            </div>
            

            <!-- Put this part before </body> tag -->
            <!-- <input type="checkbox" id="modal-edit-name" class="modal-toggle" /> -->
            <!-- <div class="modal">
                <div class="modal-box">
                    <progress
                        v-if="isBarloading"
                        class="progress progress-accent w-56" 
                        ></progress>
                    <h3 class="font-bold text-lg">Edit your name</h3>
                    <p class="py-4">This modal is to edit your name.</p>
                    <div class="modal-action">
                        <input
                            v-model="modalInputText"
                            @input="consoleModalInputText"
                            placeholder="Edit your name"
                            class="input input-bordered w-full max-w-xs"
                            :disabled="isFormDisabled"
                        />
                        <button
                            class="btn"
                            :class="EditNameModalClassObject"
                            @click="proceedEditName()"
                        >
                            Proceed
                        </button>
                        <label @click="proceedEditName()" for="modal-edit-name" class="btn">Proceed</label>
                    </div>
                </div>
            </div> -->

            <p>Current color: {{ color }}</p>

            <!-- The button to open modal -->
            <label for="my-modal" class="btn">open modal</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                <label
                    for="my-modal"
                    class="btn"
                >
                    Yay!
                </label>
                </div>
            </div>
            </div>

            <div class="p-4">
                <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
                    <img
                    class="w-full"
                    src="https://tailwindcss.com/img/card-top.jpg"
                        alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4 pb-2">
                        <div class="font-bold text-xl mb-2">
                            The Coldest Sunset
                        </div>
                        <p class="text-indigo-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                            nihil.
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="badge mr-2">
                            #photography
                        </span>
                        <span class="badge mr-2">
                            #travel
                        </span>
                        <span class="badge">
                            #winter
                        </span>
                    </div>
                </div>
                <NuxtLink to="/about" class="link link-hover">
                    {{ user.name }}さんの詳細ページへ
                </NuxtLink>
            </div>
            <button
                @click="show = !show"
                class="btn"
            >
                Show List
            </button>
            <button
                class="btn btn-primary"
            >
                One
            </button>
            <div class="w-48">
                <div
                    class="text-white text-center bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"
                >
                    Hello World
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: false,
    });
    const show = ref(false)
    const user = useLoginUser();
    const color = useColor()

    // Input and modal props update test
    // const inputText = ref('')
    const inputText = ref<String>('')
    const consoleInputText = () => {
        console.log(inputText.value)
    }

    // modal
    // isModalOpen
    const isModalOpen = ref<Boolean>(false)
    const toggleIsModalOpen = (tf: Boolean) => {
        isModalOpen.value = tf
    }


    const modalInputText= ref<String>(inputText.value)
    const consoleModalInputText = () => {
        console.log(modalInputText.value)
    }

    // isloading animation
    const isBarloading = ref<Boolean>(false)
    const toggleIsBarLoading = () => {
        isBarloading.value = !isBarloading.value
    }

    // btn loading
    const btnIsLoading = ref<Boolean>(false)
    const toggleBtnIsLoading = () => {
        btnIsLoading.value = !btnIsLoading.value
    }
    // btn disabled
    const btnIsDisabled = ref<Boolean>(false)
    const toggleBtnIsDisabled = () => {
        btnIsDisabled.value = !btnIsDisabled.value
    }

    const toggleBtnIsProceeding = () => {
        toggleBtnIsLoading()
        toggleBtnIsDisabled()
    }

    // classObject
    const EditNameModalClassObject = computed(() :Object => {
        return {
            'loading': btnIsLoading.value,
            'btn-disabled': btnIsDisabled.value
        }
    })

    const isFormDisabled = ref(false)
    const toggleIsFormDisabled = () => {
        isFormDisabled.value = !isFormDisabled.value
    }

    const toggleIsProceeding = () => {
        toggleIsFormDisabled()
        toggleBtnIsProceeding()
        toggleIsBarLoading()
    }

    const resetEditName = () => {
        modalInputText.value = inputText.value
    }

    const finishProceeding = () => {
        inputText.value = modalInputText.value
        toggleIsProceeding()
        toggleIsModalOpen(false)
        resetEditName()
    }

    const proceedEditName = () => {
        toggleIsProceeding()
        setTimeout(() => { 
            finishProceeding()
        }, 1000)
    }

    // TheAlert.vue
    const alertContent = reactive({
        title: '111',
        description: 'this is description',
        btn: 'close',
        btnText: 'See'
    })

    // Dynamic component
    const isAlert = ref(false)
    const Alert = resolveComponent('Alert')

    const openAlert = () => {
        isAlert.value = true
    }

</script>

<style lang="postcss" scoped>
    /* .badge {
        @apply
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700;
        &:hover {
            @apply bg-gray-300;
        }
    } */
</style>