<template >
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>

        <div
            class="container py-4"
        >
            <Breadcrumbs />

            <div v-if="pending">
                Loading ...
            </div>
            <div v-else>
                <ProductDetails
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: 'daisyui',
    });

    const { id } = useRoute().params

    // fetch the products
    const { data: product, pending, error, refresh } = await useFetch(
        `https://fakestoreapi.com/products/${id}`,
        { key: id }
    )

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }

</script>
