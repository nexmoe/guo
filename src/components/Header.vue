<template>
	<header>
		<div class="container">
			<router-link to="/" class="logo">
				<img
					class="logo"
					width="32"
					:src="getpic('logo.jpg')"
					alt="Logo"
				/>
				真橙物联
			</router-link>
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
	<div class="container">
		<n-menu
			class="tab"
			v-model:value="activeKey"
			mode="horizontal"
			:options="menu2"
		/>
	</div>
</template>
<script setup>
import { ref, h, getCurrentInstance } from "vue";
import { NInput, NMenu } from "naive-ui";
import { RouterLink } from "vue-router";

const getpic = (name) => {
	return getCurrentInstance().appContext.config.globalProperties.$getpic(name)
}
const activeKey = ref(null);
const value = ref(null);
const menuOptions = [
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: '/login'
					}
				},
				{ default: () => "登录" }
			),
		key: "login",
	}
];
const menu2 = [
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: '/'
					}
				},
				{ default: () => "首页" }
			),
		key: "index",
	},
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: '/about'
					}
				},
				{ default: () => "关于" }
			),
		key: "about",
	},
	{ 
		label: "按钮",
		key: 1
	},
	{ 
		label: "按钮",
		key: 2
	},
	{ 
		label: "按钮",
		key: 3
	},
	{ 
		label: "按钮",
		key: 4
	},
];
</script>

<style>
.tab .n-menu-item {
	border-bottom: 3px solid transparent;
}
.tab .n-menu-item--selected {
	border-bottom: 3px solid #3da993;
}
</style>

<style scoped>
header {
	border-bottom: 1px solid rgb(239, 239, 245);
}
header .container {
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.logo {
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #000;
}
.logo img {
	margin-right: 8px;
}
</style>
