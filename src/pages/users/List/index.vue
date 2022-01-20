<template>
  <div style="background-color: #ffffff; padding: 20px;">
    <a-row :gutter="25">
      <a-col :span="8" style="margin-bottom: 10px" v-for="p in products" :key="p.id">
        <a-card hoverable style="width: 300px">
          <img
              slot="cover"
              alt="example"
              :src="p.thumbnail.split(',')[0]"
          />
          <div style="display: flex; justify-content: center; font-weight: 600"><span>{{ p.name }}</span></div>
          <template slot="actions" class="ant-card-actions">
            <p>{{
                p.price.toLocaleString('vi', {
                  style: 'currency',
                  currency: 'VND'
                })
              }}</p>
            <a-icon key="shopping-cart" type="shopping-cart" @click="addCart(p.id)"/>
          </template>
        </a-card>
      </a-col>
    </a-row>
    <a-pagination style="margin-top: 15px"
        v-model="params.page"
        show-size-changer
        :page-size.sync="params.pageSize"
        :total="totalData"
        @change="onChangePage"
        @showSizeChange="onShowSizeChange"
    />
  </div>
</template>


<script>
import ProductService from "@/service/ProductService";
import CartService from "@/service/CartService";

export default {
  data() {
    return {
      products: [],
      totalData: undefined,
      params: {
        page: 1,
        pageSize: 6
      }
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      await ProductService.getAll(this.params).then(res => {
        this.products = res.data.data
        this.totalData = res.data.pagination.totalItems
        console.log(this.totalData);
      }).catch(res => {
        console.log(res.response)
      })
    },

    async addCart(id) {
      await CartService.addToCart(id)
          .then(res => {
            if (res.data.status != 200) {
              this.$message.error("add products fail")
            } else {
              this.$message.success(res.data.message)
            }
          })
          .catch(reason => {
            console.log(reason.response)
          })

    },
    onShowSizeChange(current, pageSize) {
      this.params.page = current;
      this.params.pageSize = pageSize;
      this.getProducts()
    },
    onChangePage(page) {
      this.params.page = page;
      this.getProducts()
    }
  },
  watch: {

  },
};
</script>
