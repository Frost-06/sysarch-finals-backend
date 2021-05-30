<template>
<div>
<button class = "btnEdit" @click="openModel" type="showModal"><i class="fa fa-pencil fa_custom fa-1x" data-toggle="modal" data-target="#form"></i></button>
   <div v-if="myModel">
             <transition name="model">
                 <div class =  "modal-mask">
                     <div class = "modal-wrapper">
                         <div class = "modal-dialog">
                             <div class = "modal-content">
                                 <div class="modal-header">
                                     <button type = "button" class="close"
                                     @click="myModel=false"><span aria-hidden="true">&times;</span></button>
                                     <h4 class = "modal-title">{{ dynamicTitle }}</h4>
                                 </div>
                                 <div class = "modal-body">
                                     <div class = "form-group">
                                         <label>Product Name</label>
                                         <input type = "text" class = "form-control" v-model="productName"/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Product Brand</label>
                                         <input type = "text" class = "form-control" v-model="brand"/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Product Quantity</label>
                                         <input type = "number" class = "form-control" v-model="quantity"/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Product Quantity</label>
                                         <input type = "number" class = "form-control" v-model="quantity"/>
                                     </div>
                                     <br />
                                     <div align = "center">
                                         <input type="hidden" v-model="hiddenId" />
                                         <input type="button" class="btn-btn-sucess btn-xs" v-model="actionButton" @click="submitData" />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </transition>       
         </div>
</div>
</template>

<script>

export default{
    data() {
        return {
           myModel: false,
           actionButton: 'Update',
           dynamicTitle: 'Update Data'
        }
    },
    methods:{
        openModel:function(){
            this.productName = '';
            this.brand = '';
            this.price = '';
            this.quantity = '';
            this.actionButton = "Update";
            this.dynamicTitle = "Update Data";
            this.myModel = true;

        }
    }
    
}
</script>
<style scoped>

</style>