<template>
	<n-layout>
		<n-layout-header><Header /></n-layout-header>
		<n-layout-content content-style="padding: 24px;">
			<div class="container">
				<n-message-provider><router-view /></n-message-provider>
			</div>
		</n-layout-content>
		<n-layout-footer><Footer/></n-layout-footer>
	</n-layout>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {
	NLayout,
	NLayoutHeader,
	NLayoutContent,
	NLayoutFooter,
	NMessageProvider
} from "naive-ui";
</script>

<style>
.n-layout {
	background-color:#f5f5f5 !important;
	 background-image: linear-gradient( #f5f5f5, #3da993);
}
.container {
	max-width: 1200px;
	margin: 0 auto;
}
</style>
