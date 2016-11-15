import Vue from 'vue/dist/vue.js';
import Carbs from '../services/carbs';
import Basket from '../services/basket';
import template from '../templates/list-component-template.html!text';
import _ from 'underscore';

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
      var data = this.carbs;
      var filterKey = this.searchQuery;

      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }

      if (this.searchCategory !== null) {
        data = _.where(data, {category: this.searchCategory})     
      };

      return data;
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
    },
    isInBasket: function(category){
      return Basket.isInBasket(category);
    }
  }
});

export default ListComponent;