<template>
	<div class="images p-3">
		<Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
		<Slide v-for="(image, index) of images" :key="index">
			<img class="img-border" :src="image" width="250" />
		</Slide>
		</Carousel>
	
		<Carousel
		id="thumbnails"
		:items-to-show="4"
		:wrap-around="false"
		v-model="currentSlide"
		ref="carousel"
		>
			<Slide v-for="(image, index) of images" :key="index">
				<div
					class="thumbnail text-center"
					:class="{ 'border-selected': (currentSlide === index) }"
				>
					<img
						class="img-border"
						@click="slideTo(index)"
						:src="image"
						width="70"
						:class="{ 'selected': (currentSlide === index) }"
					/>
				</div>
			</Slide>
		</Carousel>
	</div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
	name: 'Gallery',
	props: {
		images: Array
	},
	components: {
	  Carousel,
	  Slide,
	  Navigation,
	},
	data: () => ({
	  currentSlide: 0,
	}),
	methods: {
	  slideTo(val) {
		this.currentSlide = val
	  },
	},
  })
  </script>