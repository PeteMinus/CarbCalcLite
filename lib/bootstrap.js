import _ from 'underscore';
import Vue from 'vue/dist/vue.js';
import ListComponent from './components/list-component';
import BasketComponent from './components/basket-component';

import Basket from './services/basket';

export function bootstrap() {
  
  new Vue({
  	 el: '#app',
     data: function() {
        return {
            side: false,
            basket: Basket.get()
        };
     },
     computed: {
        totalCarbs: function() {
            return _.reduce(this.basket.items, function (n, cart_item) {
                return cart_item.calc_carbs + n;
            }, 0).toFixed(0);
        },
        totalItems: function() {
            return this.basket.items.length;
        }
     },
     methods: {
        toggleSide: function() {

            this.side = !this.side;

        },
        clearBasket: Basket.emptyBasket
     },
  	 components: {
  	 	'list-component' : ListComponent,
  	 	'basket-component' : BasketComponent
  	 }
  });

}  