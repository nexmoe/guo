<template>
	<header>
		<div class="container">
			<div class="logo">
				<router-link to="/">
					<img
						class="logo"
						width="32"
						src="https://shu.nexmoe.com/assets/icon.b780f778.png"
						alt="Logo"
					/>
				</router-link>
			</div>
			<div class="search">
				<n-input v-model:value="value" type="text" placeholder="搜索" />
			</div>
			<div class="menu">
				<n-menu
					v-model:value="activeKey"
					mode="horizontal"
					:options="menuOptions"
				/>
			</div>
		</div>
	</header>
</template>
<script setup>
import { ref, h } from "vue";
import { NInput, NMenu } from "naive-ui";
import { RouterLink } from "vue-router";

const value = ref(null);
const menuOptions = [
	{
		label: "登录",
		key: "login",
	},
	{
		label: () =>
			h(
				RouterLink,
				{
					to: "about"
				},
				{ default: () => "关于" }
			),
		key: "about",
	},
];
</script>

<style scoped>
header {
	border-bottom: 1px solid rgb(239, 239, 245);
}
.container {
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
