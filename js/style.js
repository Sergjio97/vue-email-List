const app = new Vue({

    el: "#root",

    data: {
        listaMail: [],
    },

    methods: {

    },
    
    created() {
        for (let i = 0; i < 10; i++) {

            let newMail = {
                mail: null,
            }

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                newMail.mail = response.data.response;
            });

            this.listaMail.push(newMail);
        }
    },

});
