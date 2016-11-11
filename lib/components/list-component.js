import Vue from 'vue/dist/vue.js';
import Carbs from '../services/carbs';
import Basket from '../services/basket';
import template from '../templates/list-component-template.html!text';

var carbsAll = Carbs.getAll();
var categories = Carbs.getCategories();


const ListComponent = Vue.extend({	
  template,	
  data: function(){
  	return {
  		carbs : carbsAll
  	} 
  },
  methods: {
  	addToBasket: function(item){
  		Basket.addToBasket(item);
  	},
  	emptyBasket: function(){
  		Basket.emptyBasket();
  	}
  }
});

export default ListComponent;