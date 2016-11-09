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