<template>
	<n-layout>
		<n-layout-header><Header /></n-layout-header>
		<n-layout-content content-style="padding: 24px;">
			<div class="container">
				<n-message-provider><router-view /></n-message-provider>
			</div>
		</n-layout-content>
		<n-layout-footer></n-layout-footer>
	</n-layout>
</template>

<script setup>
import Header from "./components/Header.vue";
import {
	NLayout,
	NLayoutHeader,
	NLayoutContent,
	NLayoutFooter,
	NMessageProvider
} from "naive-ui";
</script>

<style>
.container {
	max-width: 1060px;
	margin: 0 auto;
}
</style>
