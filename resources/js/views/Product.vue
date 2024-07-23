<template>
    <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="d-flex justify-content-center" v-if="showLoader">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="row" v-if="Object.keys(productData).length > 0">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <ProductGallery :images="productData?.data?.images" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ProductData :product-data="productData" />
                    </div>
                </div>
                <div class="d-flex justify-content-center" v-if="!showLoader && Object.keys(productData).length === 0">
                    <h4> 404 - Page Not Found</h4>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import ProductGallery from '../Component/ProductGallery.vue';
import ProductData from '../Component/ProductData.vue';

export default {
    components: {
        ProductGallery,
        ProductData
    },
    setup () {
        const route = useRoute();
        const showLoader = ref(true);
        const productData = ref({});

        const productDetailsData = async () => {
            try {
                const slug = route.params.slug
                const response = await fetch(`/client/products/${slug}`);
                productData.value = await response.json();
                showLoader.value = false
            } catch(err) {
                console.log(err)
                showLoader.value = false
            }
            
        }
        productDetailsData()

        return {
            productData,
            showLoader
        }
    }
}
</script>