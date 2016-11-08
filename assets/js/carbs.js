Vue.component('modal', {
        template: '#modal-template',
        props: {
            'show': {
                type: Boolean,
                required: true,
                twoWay: true
            },
            product: {
                id: '',
                weight: '',
                calc_weight: ''
            }
        }
    });

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
                    showProductModal: false,
                    readyStatus: false,
                    showMainContent: true,
                    showAbout: false
                },
                computed: {
                    filteredProducts: function () {
                        var result = this.products;

                        if (this.searchCategory != null) {

                            if (this.searchCategory == 'favs') {
                                var favs = []
                                var ids = _.pluck(this.fav_items, 'id');

                                console.log(ids);
                                for (var i = 0, len = ids.length; i < len; i++) {
                                    var item = _.findWhere(result, {id: ids[i]});
                                    if (item) {
                                        favs.push(item);
                                    }
                                }
                                result = favs
                            } else {
                                result = _.where(result, {category: this.searchCategory})
                            }
                        }

                        //result = this.$options.filters.filterBy(result, this.searchQuery);
                        //result = this.$options.filters.orderBy(result, 'name');
                        //result = this.$options.filters.limitBy(result, 100);
                        return result
                    },
                    count: function () {
                        return 0;
                        //return this.cart_items.length;
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
                        this.searchCategory = value
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
                    notInCart: function (product) {
                        var ids = _.pluck(this.cart_items, 'id');
                        return !_.contains(ids, product.id);
                    },
                    notInFav: function (product) {
                        var ids = _.pluck(this.fav_items, 'id');
                        return !_.contains(ids, product.id);
                    },
                    addToFav: function (product) {
                        if (this.fav_items === null) {
                            this.fav_items = []
                        }

                        var fav = [];
                        fav.id = product.id;
                        var ids = _.pluck(this.fav_items, 'id');

                        if (!_.contains(ids, product.id)) {
                            this.fav_items.unshift(product);
                        }
                        localStorage.setItem("fav_items", JSON.stringify(this.fav_items))

                    },
                    removeFromFav: function (product) {
                        var favId = product.id;
                        this.fav_items.forEach(function (element) {
                            if (element.id == favId) {
                                this.fav_items.splice(this.fav_items.indexOf(element), 1)
                        
                            }
                        }.bind(this));

                        localStorage.setItem("fav_items", JSON.stringify(this.fav_items))

                    },

                    addToCart: function (product) {
                        product.calc_weight = product.weight
                        var cart = Vue.util.extend({}, product);
                        var ids = _.pluck(this.cart_items, 'id');

                        if (this.cart_items == null) {
                            this.cart_items = []
                        }

                        if (!_.contains(ids, product.id)) {
                            cart.qty = 1;
                            this.cart_items.unshift(cart);
                        }

                        try {
                            items = JSON.parse(localStorage.getItem("items"))
                        } catch (error) {
                            items = []
                        }
                        items = this.cart_items
                        console.log(items);
                        localStorage.setItem("items", JSON.stringify(items))

                    },

                    changeQty: function (product) {
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
                        localStorage.setItem("items", JSON.stringify(this.cart_items))
                    },
                    editSelectedProduct: function (product) {
                        this.toBeEdited = product;
                        this.showProductModal = true;
                    }
                }
            })
            ;