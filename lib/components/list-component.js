import Vue from 'vue/dist/vue.js';
import Carbs from '../services/carbs';
import Basket from '../services/basket';
import template from '../templates/list-component-template.html!text';

var carbsAll = Carbs.getAll();
var categoriesAll = Carbs.getCategories();

const ListComponent = Vue.extend({	
  template,
  replace: true,	
  data: function(){
  	return {
  		carbs : carbsAll,
      categories : categoriesAll,
      searchCategory: null,
      searchQuery: ''
  	} 
  },
  computed: {
    filteredData: function () {
      var category = this.searchCategory;
    }
  },
  methods: {
  	addToBasket: function(item){
  		Basket.addToBasket(item);
  	},
  	emptyBasket: function(){
  		Basket.emptyBasket();
  	},
    selectFilterCategory: function(category){
      this.searchCategory = category;
    }
  }
});

export default ListComponent;