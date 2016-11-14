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
		isInBasket: function(id){

		},
		emptyBasket: function(){
			basket.items = [];
			localStorage.setItem("items", basket.items)		
		}
	};

})();