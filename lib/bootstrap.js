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
            basket: Basket.get(),
            authors: false,
            agreement: false,
            readyStatus: false,
        };
     },
     computed: {
        totalItems: function() {
            return this.basket.items.length;
        }
     },
     methods: {
        toggleSide: function() {
            this.side = !this.side;
        },
        authorsModal: function(value) {
          this.authors = value;
        },
        agreementDone: function(){
          this.agreement = true
          localStorage.setItem("agreement", JSON.stringify(this.agreement))
        }
     },
     created: function(){
        this.readyStatus = true;
        this.agreement = JSON.parse(localStorage.getItem("agreement"));
     },
  	 components: {
  	 	'list-component' : ListComponent,
  	 	'basket-component' : BasketComponent
  	 }
  });

}  