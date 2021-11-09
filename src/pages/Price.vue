<template>
	<n-card :title="'价格表'"
		><n-data-table :columns="columns" :data="data" :pagination="pagination"
	/></n-card>
</template>

<script>
import { h, defineComponent, ref } from "vue";
import { NCard, NDataTable, NButton, useMessage } from "naive-ui";
import priceData from "./price.json";

const createColumns = ({ sendMail }) => {
	return [
		{
			title: "航线",
			key: "航线",
		},
		{
			title: "启运港",
			key: "启运港",
		},
		{
			title: "目的港",
			key: "目的港",
		},
		{
			title: "运价",
			key: "运价",
		},
		{
			title: "操作",
			key: "actions",
			render(row) {
				return h(
					NButton,
					{
						onClick: () => sendMail(row),
					},
					{ default: () => "查看" }
				);
			},
		},
	];
};

const createData = () => priceData;

export default defineComponent({
	components: {
		NDataTable,
		NCard
	},
	setup() {
		const message = useMessage();
		return {
			
			data: createData(),
			columns: createColumns({
				sendMail(rowData) {
					message.info(
						"查看：" + rowData.启运港 + "-" + rowData.目的港
					);
				},
			}),
			pagination: {
				pageSize: 7,
			},
		};
	},
});
</script>
