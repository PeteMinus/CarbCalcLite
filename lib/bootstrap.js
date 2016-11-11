import _ from 'underscore';
import Vue from 'vue/dist/vue.js';
import ListComponent from './components/list-component';
import BasketComponent from './components/basket-component';

export function bootstrap() {
  
  new Vue({
  	 el: '#app',
  	 components: {
  	 	'list-component' : ListComponent,
  	 	'basket-component' : BasketComponent
  	 }
  });

}  