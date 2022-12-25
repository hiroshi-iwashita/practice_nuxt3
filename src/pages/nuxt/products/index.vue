<template >
    <div
        class="container py-4"
    >
        <Breadcrumbs />
            
        <p>
            Products
        </p>
        <div v-if="pending">
            Loading ...
        </div>
        <div v-else>
            <div
                class="grid grid-cols-4 gap-5"
            >
                <div
                    v-for="(product, index) in products"
                    :key="index"
                >
                    <ProductCard
                        :product="product"
                    />
                </div>
            </div>
        </div>
    
        <button
            @click="enableCustomLayout"
        >
            Update layout
        </button>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: 'daisyui',
    })

    useHead({
        title: 'Nuxt Dojo | March',
        meta: [
            { name: 'description', content: 'Nuxt 3 March'}
        ]
    })

    // fetch the products
    const { data: products, pending, error, refresh } = await useLazyFetch('https://fakestoreapi.com/products') 

    function enableCustomLayout () {
        setPageLayout('custom')
    }
</script>
