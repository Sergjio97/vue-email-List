const app = new Vue({

    el: "#root",

    data: {
        listaMail: [],
    },

    methods: {

    },
    
    created() {
        for (let i = 0; i < 10; i++) {

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                this.listaMail.push(response.data.response);
            });

    
        }
    },

});
