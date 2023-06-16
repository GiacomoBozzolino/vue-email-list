const { createApp } = Vue


createApp({
    data() {
        return {
            email : []
        }
    },

    methods: {
        createRandomEmail(){
            for ( let i=1; i<=10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                    this.email.push(result.data.response)
                })
            }

        }
    },
})