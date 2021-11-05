<template>
	<n-space vertical>
		<n-grid :x-gap="12" :y-gap="8" :cols="3">
			<n-grid-item :span="2">
				<n-carousel autoplay show-arrow>
					<a href="https://shu.nexmoe.com/#/"
						><img
							class="carousel-img"
							src="https://shu.nexmoe.com/assets/Snipaste_2021-10-29_00-26-15.0f6b4746.png"
					/></a>
					<a href="https://shu.nexmoe.com/#/"
						><img
							class="carousel-img"
							src="https://shu.nexmoe.com/assets/Snipaste_2021-10-29_00-26-15.0f6b4746.png"
					/></a>
					<a href="https://shu.nexmoe.com/#/"
						><img
							class="carousel-img"
							src="https://shu.nexmoe.com/assets/Snipaste_2021-10-29_00-26-15.0f6b4746.png"
					/></a>
				</n-carousel>
			</n-grid-item>
			<n-grid-item :span="1">
				<img
					style="width:100%"
					src="https://i.dawnlab.me/155882fff237aa4054d9629c85871dce.jpg"
			/></n-grid-item>
		</n-grid>
		<n-grid :x-gap="12" :y-gap="8" :cols="3">
			<n-grid-item v-for="item in datax">
				<n-card :title="item.catergory_title">
					<n-space>
						<n-tag
							style="cursor: pointer"
							@click="routerpath()"
							v-for="i in item.children"
							>{{ i.title }}</n-tag
						>
					</n-space>
				</n-card>
			</n-grid-item>
		</n-grid>
	</n-space>
</template>

<script setup>
import {
	NCarousel,
	NGrid,
	NGridItem,
	NSpace,
	NCard,
	NTag,
	NImage,
} from "naive-ui";
import datax from "./index.json";
import router from "../router/index";

const routerpath = () => {
	router.push("/price/123");
};
</script>

<style>
.light-green {
	height: 108px;
	background-color: rgba(0, 128, 0, 0.12);
}
.green {
	height: 108px;
	background-color: rgba(0, 128, 0, 0.24);
}
.carousel-img {
	width: 100%;
}
</style>
