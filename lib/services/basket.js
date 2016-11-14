import _ from 'underscore';

export default (function(){

	const basket = {
		items : []		
	}

	return {
		get: function(){

			try {
            	var ls = JSON.parse(localStorage.getItem("items"));         	
            	if(ls !== null){
            		basket.items = ls
            	}
	
	        } catch (error) {
	            basket.items = []
	        }
	        
			return basket;
		},		
		addToBasket: function(item){
			item.calc_weight = item.weight;
			basket.items.push(item);
        	localStorage.setItem("items", JSON.stringify(basket.items))
		},
		isInBasket: function(item){
			var existsInBasket = false;
			_.each(basket.items, function(it){
				if(it.id == item.id){
					existsInBasket = true;
				}
			});
			return existsInBasket;
		},
		emptyBasket: function(){
			basket.items = [];
			localStorage.setItem("items", basket.items)		
		}
	};

})();