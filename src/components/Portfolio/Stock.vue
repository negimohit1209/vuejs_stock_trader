<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
                </h3>
            </div>
            <div class="div panel-body">
                <div class="div panel-left">
                    <input 
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    v-model="quantity"
                    :class="{danger: insufficientQuantity}"
                    >
                </div>
                <div class="panel-right">
                    <button class='btn btn-success' @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">{{insufficientQuantity ? 'Not enough stocks' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    props: ['stock'],
    data(){
        return{
            quantity: 0,
        }
    },
    computed: {
        insufficientQuantity(){
            return this.stock.quantity < this.quantity
        },
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }
        ),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity)
            };
            this.placeSellOrder(order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped> 
    .danger {
        border: 1px solid red;
    }
</style>