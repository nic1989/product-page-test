<template>
	<div class="p-4">
		<div class="mt-4 mb-3">
			<h2>{{ productData?.data?.name }}</h2>
		</div>
		<p class="about">{{ productData?.data?.description }}</p>
		<div class="d-flex flex-row align-items-center">
			<h4 class="fw-bold">${{ productData?.data?.price?.discounted }}</h4>
			<div class="ms-2">
				<span class="discount-per">
					{{ productData?.data?.discount?.type !== 'percent' ? '$' : '' }}{{ productData?.data?.discount?.amount }}{{ productData?.data?.discount?.type === 'percent' ? '%' : '' }}
				</span>
			</div>
		</div>
		<div class="original-price mt-1">
			<small class="dis-price">${{ productData?.data?.price?.full }}</small>
		</div>  
		<div class="cart mt-4 align-items-center d-flex flex-row">
			<input
				type="button"
				value="-"
				class="button-minus icon-shape basic-orange icon-sm bg-grey"
				data-field="quantity"
				@click="increaseDecQuantity('minus')"
				:disabled="disableMinus"
				:class="{'disabled': (disableMinus)}"
			/>
			<input
				type="number"
				step="1"
				max="10"
				:value="quantity"
				name="quantity"
				class="border-0 fw-bold w-25 h-40 text-center bg-grey"
			/>
			<input
				type="button"
				value="+"
				class="button-plus icon-shape basic-orange icon-sm bg-grey"
				data-field="quantity"
				@click="increaseDecQuantity('plus')"
			/>
			<div class="ms-4">
				<button class="btn btn-danger text-uppercase px-4 add-to-cart">
					<i class="fa-solid fa-cart-shopping me-2"></i> Add to cart
				</button>
			</div>
		</div>
	</div>
  </template>
  
  <script>
  import { computed, ref } from 'vue'
  
  export default {
	name: 'ProductDetails',
	props: {
		productData: Object
	},
	setup () {
		const quantity = ref(1);        
        const increaseDecQuantity = (val) => {
            if (val === 'plus') {
                quantity.value++;
            } else if (val === 'minus' && quantity.value > 0) {
                quantity.value--;
            }
        }
        const disableMinus = computed(() => {
            return quantity.value === 1;
        });

		return {
            quantity,
            increaseDecQuantity,
            disableMinus
        }
	}
  }
  </script>