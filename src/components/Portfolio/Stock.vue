<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
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
                    v-model="quantity">
                </div>
                <div class="panel-right">
                    <button class='btn btn-success' @click="sellStock" :disabled="quantity <= 0">Sell</button>
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
    methods: {
        ...mapActions([
            'sellStock'
        ]),
        sellStock(){
            const order = {
                stockId: this.stockId,
                stockPrice: this.stockPrice,
                quantity: this.quantity
            };
            this.sellStock();
        }
    }
}
</script>