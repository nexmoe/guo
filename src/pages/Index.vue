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
			<n-grid-item style="height: 374px;overflow-y: scroll;background:#fff;" :span="1">
				<n-list bordered style="margin: 0;">
					<n-list-item v-for="item in 17">
						<n-thing
							title="中国联通在全国启动 5G 消息试商用"
							description="今天，中国联通在全国启动 5G 消息试商用，并开展“5G 消息体验招募活动”，将享受更丰富、便捷、智能、安全的 5G 消息新体验。"
						>
						</n-thing>
					</n-list-item>
				</n-list>
				</n-grid-item
			>
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
	NList,
	NListItem,
	NThing,
} from "naive-ui";
import datax from "./index.json";
import router from "../router/index";
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
