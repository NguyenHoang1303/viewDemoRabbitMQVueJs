<template>
  <a-card>
    <a-table :columns="columns" :data-source="data" :pagination="false" rowKey="id">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="checkOut" slot-scope="text">
        <p>{{text === 1 ? "Đã thanh toán" : "Chưa thanh toán"}}</p>
      </span>
      <span slot="action">
      <a-divider type="vertical"/>
      <a>Delete</a>
    </span>
    </a-table>
    <a-pagination style="margin-top: 15px" :total="totalData" @change="onChangePage"/>
  </a-card>
</template>

<script>
import OrderService from "@/service/OrderService";
import {columns} from "@/pages/Order/colums";

export default {
  data() {
    return {
      data: [],
      totalData:undefined,
      columns: columns,
      params:{
        page: 1,
        pageSize: 10,
      }
    }
  },
  mounted() {
    document.addEventListener('noti', (e) => {
      // alert(e.detail.title + " " + e.detail.message)
      this.$message.info(e.detail.message)
    })
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      OrderService.getAll(this.params).then(res => {
            console.log(res.data.data);
            this.data = res.data.data;
            this.totalData = res.data.pagination.totalItems;
          }
      ).catch(e => console.log(e))
    },
    onChangePage(current) {
      this.params.page = current;
      this.getAll();

    },
  },
}
</script>

<style scoped>

</style>