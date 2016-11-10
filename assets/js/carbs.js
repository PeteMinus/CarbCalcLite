/**
* Bootstrap CarbsToday App
**/
var v = new Vue({
    el: '#app',
    data: {
        isActiveTotals: false,
        items: [],
        categories: [],
        searchQuery: '',
        searchCategory: null,
        products: foodData,
        cart_items: JSON.parse(localStorage.getItem("items")),
        fav_items: JSON.parse(localStorage.getItem("fav_items")),
        agreement: JSON.parse(localStorage.getItem("agreement")),
        gridColumns: ['name'],
        showProductModal: false,
        readyStatus: false,
        showMainContent: true,
        showAbout: false
    },
    components: {
        'data-table' : dataTable
    },
    computed: {
        count: function () {
            if(this.cart_items){
                return this.cart_items.length;
            }

            return 0;
        },
        total: function () {
            return _.reduce(this.cart_items, function (n, cart_item) {
                return cart_item.calc_carbs + n;
            }, 0).toFixed(0);
        },
        showAgreement: function () {
            if (this.readyStatus == true) {
                this.agrement = JSON.parse(localStorage.getItem("agreement"));
                if (this.agreement == true) {
                    this.showMainContent = true;
                }
            }
        }

    },
    mounted: function () {
        this.readyStatus = true;
        this.readyStatusAgreement = this.agreement;
        this.categories = this.makeUniqueCategories(this.products)
    },

    methods: {
        makeUniqueCategories: function (products) {
            var result = _.uniq(_.pluck(this.products, 'category'), true);
            return result;
        },
        selectFilterCategory: function (value) {            
            this.searchCategory = value;
        },
        selectedCategory: function (){
            return this.searchCategory;
        },
        isSelectedCategory: function (value) {
            return value == this.searchCategory;
        },
        aboutVisible: function (status) {
            this.showAbout = status;
        },
        agreementDone: function () {
            this.agreement = true
            localStorage.setItem("agreement", JSON.stringify(this.agreement))
        },
        toggleTotalsHeight: function (status) {
            this.isActiveTotals = status
        },
        changeQty: function (product, event) {
            product.calc_carbs = Math.round(event.target.value * product.carbs / product.weight);
            product.calc_weight = event.target.value
            try {
                items = JSON.parse(localStorage.getItem("items"))
            } catch (error) {
                items = []
            }
            items = this.cart_items
            localStorage.setItem("items", JSON.stringify(items))
        }
        ,
        decQty: function (product) {
            this.cart_items.splice(this.cart_items.indexOf(product), 1)
            localStorage.setItem("items", JSON.stringify(this.cart_items))
        },
        emptyCart: function () {
            this.cart_items = []
            this.isActiveTotals = false
            console.log(this.cart_items);
            localStorage.setItem("items", JSON.stringify([]))
        },
    }
})
;