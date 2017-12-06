new Vue({

    el: '#app',

    data: {
        message: 'salut les gens',
        link: 'http://grafikart.fr',
        success: true,
        persons: ['Jonathan', 'Clarisse', 'Benjamin', 'Pierre']
    },

    methods: {
        close: function() {
            this.success = false
        },
        style: function() {
            if (this.success) {
                return { background: '#00FF00' }
            } else {
                return { background: '#FF0000' }
            }
        }
    }

})