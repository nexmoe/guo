<template>
	<div class="container">
		<article>
			<h1>简介</h1>
			<ul>
				<li><p>企业文化：事业、合作、创新</p></li>
				<li><p>企业愿景：成为全球物流交易和结算服务平台</p></li>
				<li><p>企业使命：做全球中小物流企业的盈利帮手</p></li>
				<li><p>企业目标：帮助全球百万中小物流企业盈利</p></li>
			</ul>
			<hr />
			{{
				`真橙物流科技有限公司成立于2021年，

致力成为全球物流交易和结算服务平台。

企业团队拥有15名优秀的互联网和物流行业人才组成的专业团队，打造全球百万物流企业生态圈。

锦程物流网的营销产品体系（信誉通、峰会、广告等）为物流企业提供完善的营销方案；

交易结算产品体系（跨境结算TCS、美元快付）为整个行业提供安全、快捷的业务结算解决方案；

交易担保圈层产品体系（国际信誉通GCP）为会员企业提供交易过程中的风险保障；

配套服务产品体系（保险、招聘等）为企业运营管理提供专项、高效、低成本的服务及资源解决方案。

目前，锦程物流网已经成为汇聚全球物流提供商、贸易商以及行业相关资源的集中地，

真橙物流科技有限公司网将继续秉承自己的企业文化、坚守使命与目标。

为中小物流企业赋能， 成为全球物流交易和结算服务平台。

公司成员介绍：张旭 秦红欣 韩晓婷 安乐宁 张恺 陆子健 刘丽

荣获奖项：“互联网+”大学生创新创业大赛河南省区选拔赛二等奖。获得专利两项。`
			}}
			<p>
				<img :src="getpic('people.jpg')" />
			</p>
			<p><img :src="getpic('certificate.png')" /></p>
		</article>
	</div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const getpic = (name) => {
	return getCurrentInstance().appContext.config.globalProperties.$getpic(
		name
	);
};
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
