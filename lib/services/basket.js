import _ from 'underscore';

export default (function(){

	const basket = {
		items : []		
	}

	return {
		get: function(){
			return basket;
		},		
		addToBasket: function(item){
			item.calc_weight = item.weight;
			basket.items.push(item);
		},
		isInBasket: function(id){

		},
		emptyBasket: function(){
			basket.items = [];		
		}
	};

})();