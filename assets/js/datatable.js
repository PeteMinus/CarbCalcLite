/**
* Food list component 
**/

var dataTable = {    
  template: '#data-table',
  replace: true,
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
    category: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: 'name',
      sortOrders: sortOrders,
      fav_items: this.$parent.fav_items,
      cart_items: this.$parent.cart_items,
      searchCategory: this.$parent.searchCategory
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      var selectedCategory = this.category
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      
      if (selectedCategory == 'favs') {
          var favs = []
          var ids = _.pluck(this.fav_items, 'id');

          for (var i = 0, len = ids.length; i < len; i++) {
              var item = _.findWhere(data, {id: ids[i]});
              if (item) {
                  favs.push(item);
              }
          }
          data = favs
      }

      if (selectedCategory !== null && selectedCategory!=='favs') {

      };

      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
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
    editSelectedProduct: function (product) {
        this.toBeEdited = product;
        this.showProductModal = true;
    }
  }
}

/**
* End Food list component 
**/