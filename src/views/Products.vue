<template>
  <div v-if="this.product">
    <h4>Product</h4>
    <div>
      <label>Product Name: </label> {{this.product.productName}}
    </div>
    <div>
      <label>Brand: </label> {{this.product.brand}}
    </div>
    <div>
      <label>Quantity </label> {{this.product.quantity}}
    </div>
    <div>
      <label>Price: </label> {{this.product.price}}
    </div>
  
    <span v-if="this.product.active"
      v-on:click="updateActive(false)"
      class="button is-small btn-primary">Inactive</span>
    <span v-else
      v-on:click="updateActive(true)"
      class="button is-small btn-primary">Active</span>
  
    <span class="button is-small btn-danger" v-on:click="deleteProduct()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Product...</p>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "product",
  props: ["product"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.product.id,
        productName: this.product.productName,
        brand: this.product.brand,
        quantity: this.product.quantity,
        price: this.product.price
      };

      http
        .put("/product" + this.product.id, data)
        .then(response => {
          this.users.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser() {
      http
        .delete("/product/" + this.product.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>