<template>
	<n-space vertical>
		<n-grid :x-gap="12" :y-gap="8" :cols="3">
			<n-grid-item :span="2">
				<n-carousel autoplay show-arrow>
					<img class="carousel-img" :src="getpic('1.jpg')" />
					<img class="carousel-img" :src="getpic('2.jpg')" />
					<img class="carousel-img" :src="getpic('3.jpg')" />
					<img class="carousel-img" :src="getpic('4.jpg')" />
					<img class="carousel-img" :src="getpic('5.jpg')" />
					<img class="carousel-img" :src="getpic('6.jpg')" />
				</n-carousel>
			</n-grid-item>
			<n-grid-item
				style="height: 293px; overflow-y: scroll; background: #fff"
				:span="1"
			>
				<n-list bordered style="margin: 0">
					<n-list-item v-for="item in 17">
						<n-thing
							title="中国联通在全国启动 5G 消息试商用"
							description="今天，中国联通在全国启动 5G 消息试商用，并开展“5G 消息体验招募活动”，将享受更丰富、便捷、智能、安全的 5G 消息新体验。"
						>
						</n-thing>
					</n-list-item>
				</n-list>
			</n-grid-item>
		</n-grid>
		<n-grid :x-gap="12" :y-gap="8" :cols="3">
			<n-grid-item v-for="cate1 in datax" :span="3">
				<n-card  :title="cate1.catergory_title">
					<template v-for="cate2 in cate1.children">
						<a-typography-title :level="5" style="margin-top:10px;">{{cate2.title}}</a-typography-title>
						<n-space>
							<n-tag
								style="cursor: pointer"
								@click="routerpath()"
								v-for="i in cate2.children"
								>{{ i.title }}</n-tag
							>
						</n-space>
					</template>
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
import { getCurrentInstance } from "vue";
const getpic = (name) => {
	return getCurrentInstance().appContext.config.globalProperties.$getpic(
		name
	);
};
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

