<template>
	<div class="container">
		<a-card hoverable>
			<template #cover>
				<img alt="example" :src="getpic('people.jpg')" />
			</template>
			<a-card-meta title="简介">
				<template #description
					><article>
						<ul>
							<li><p>企业文化：事业、合作、创新</p></li>
							<li>
								<p>企业愿景：成为全球物流交易和结算服务平台</p>
							</li>
							<li>
								<p>企业使命：做全球中小物流企业的盈利帮手</p>
							</li>
							<li>
								<p>企业目标：帮助全球百万中小物流企业盈利</p>
							</li>
						</ul>
						<a-divider />
						<a-typography-paragraph>
							真橙物流科技有限公司成立于2021年，
						</a-typography-paragraph>
						<a-typography-paragraph>
							致力成为全球物流交易和结算服务平台。
						</a-typography-paragraph>
						<a-typography-paragraph>
							企业团队拥有15名优秀的互联网和物流行业人才组成的专业团队，打造全球百万物流企业生态圈。
						</a-typography-paragraph>
						<a-typography-paragraph>
							锦程物流网的营销产品体系（信誉通、峰会、广告等）为物流企业提供完善的营销方案；
						</a-typography-paragraph>
						<a-typography-paragraph>
							交易结算产品体系（跨境结算TCS、美元快付）为整个行业提供安全、快捷的业务结算解决方案；
						</a-typography-paragraph>
						<a-typography-paragraph>
							交易担保圈层产品体系（国际信誉通GCP）为会员企业提供交易过程中的风险保障；
						</a-typography-paragraph>
						<a-typography-paragraph>
							配套服务产品体系（保险、招聘等）为企业运营管理提供专项、高效、低成本的服务及资源解决方案。
						</a-typography-paragraph>
						<a-typography-paragraph>
							目前，锦程物流网已经成为汇聚全球物流提供商、贸易商以及行业相关资源的集中地，
						</a-typography-paragraph>
						<a-typography-paragraph>
							真橙物流科技有限公司网将继续秉承自己的企业文化、坚守使命与目标。
						</a-typography-paragraph>
						<a-typography-paragraph>
							为中小物流企业赋能，
							成为全球物流交易和结算服务平台。
						</a-typography-paragraph>
						<a-typography-paragraph>
							公司成员介绍：张旭 秦红欣 韩晓婷 安乐宁 张恺 陆子健
							刘丽
						</a-typography-paragraph>
						<a-typography-paragraph>
							荣获奖项：“互联网+”大学生创新创业大赛河南省区选拔赛二等奖。获得专利两项。
						</a-typography-paragraph>

						<p><img :src="getpic('certificate.png')" /></p></article
				></template>
			</a-card-meta>
		</a-card>
	</div>
</template>

<script>
import { getCurrentInstance } from "vue";

import { defineComponent } from "vue";
export default defineComponent({
	setup() {
		const getpic = (name) => {
			return getCurrentInstance().appContext.config.globalProperties.$getpic(
				name
			);
		};

		return {
			getpic,
		};
	},
});
</script>

<style scoped>
.container {
	max-width: 800px;
}
article {
	white-space: pre-line;
}
img {
	max-width: 100%;
}
</style>
