import Vue from 'vue/dist/vue.js';
import template from '../templates/basket-component-template.html!text';
import Basket from '../services/basket';
import _ from 'underscore';

let myBasket = Basket.get();

const BasketComponent = Vue.extend({	
  template,
  data: function(){
  	return {
  		basket : myBasket
  	} 
  },
  computed: {
  	totalCarbs: function () {
	    return _.reduce(myBasket.items, function (n, cart_item) {
	        return cart_item.calc_carbs + n;
	    }, 0).toFixed(0);
     },
     totalItems: function() {
       return this.basket.items.length;
     }
  },
  methods: {
  	emptyBasket: Basket.emptyBasket,
    removeFromBasket: Basket.removeFromBasket
  }
});

export default BasketComponent;