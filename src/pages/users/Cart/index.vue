<template>
  <div>
    <a-card>
      <a-table :columns="columns" :data-source="data" :pagination="false" rowKey="name">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
        <span slot="thumbnail" slot-scope="text, record">
          <img :src="record.thumbnail.split(',')[0]" style="width: 100%;">
        </span>
        <span slot="unitPrice" slot-scope="text, record">
        <p>{{ record.unitPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'}) }}</p>
      </span>
        <span slot="totalPrice" slot-scope="text, record">
        <p>{{ (record.unitPrice * record.quantity).toLocaleString('vi', {style: 'currency', currency: 'VND'}) }}</p>
      </span>
        <span slot="action">
      <a-divider type="vertical"/>
      <a>Delete</a>
    </span>
      </a-table>
      <div class="totalPrice">
        <span class="totalPriceClazz">Total price:</span>
        <span class="totalPriceClazz">{{
            totalPrice ? totalPrice.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND'
            }) : ''
          }}</span>
      </div>
      <div style="margin-top: 15px">
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
          <a-form-item label="Name">
            <a-input
                v-decorator="['name', { rules: [{ required: true, message: 'Please input your name!' }] }]"
            />
          </a-form-item>
          <a-form-item label="Phone">
            <a-input
                v-decorator="['phone', { rules: [{ required: true, message: 'Please input your phone!' }] }]"
            />
          </a-form-item>
          <a-form-item label="Email">
            <a-input
                v-decorator="['email', { rules: [{ required: true, message: 'Please input your email!' }] }]"
            />
          </a-form-item>
          <a-form-item label="Address">
            <a-input
                v-decorator="['address', { rules: [{ required: true, message: 'Please input your address!' }] }]"
            />
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-card>
  </div>
</template>
<script>


import {columns} from "@/pages/users/Cart/coloums";
import CartService from "@/service/CartService";
import OrderService from "@/service/OrderService";


export default {
  data() {
    return {
      data: [],
      totalPrice: undefined,
      columns: columns,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {name: 'coordinated'}),
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  created() {
    this.getCart()
  },
  methods: {
    getCart() {
      CartService.getDetail().then(res => {
        let cart = res.data.data
        let arr = [];
        // eslint-disable-next-line no-unused-vars
        let price = 0;
        for (const value in cart) {
          arr.push(cart[value])
          price += (cart[value].unitPrice * cart[value].quantity)
        }
        this.totalPrice = price;
        this.data = arr;
      }).catch(reason => {
        console.log(reason.response)
      })
    },


    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          values.userId = 451691;
          console.log("values: ", values)

          OrderService.create(values)
              .then(res => {
                console.log("res.data.data: ", res.data.data)
                if (res.data.status !== 200) {
                  this.$message.error(res.data.message)
                } else {
                  this.$message.success(res.data.message)
                }
              })
              .catch(reason => {
                console.log(reason.response)
              })
        }
      });
    },

  }
};
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.totalPriceClazz {
  font-weight: 600;
  font-size: 20px;
}

.totalPrice {
  margin-top: 15px;
  justify-content: end;
  display: flex;
  margin-right: 15px;
}
</style>
