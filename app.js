const app = Vue.createApp({
    data(){
        return {
            title : 'The final empire',
            author : 'Sajan Khadka',
            age : 22,
            showBooks : true,
        }
    },
    methods : {
        changeTitle(){
            this.title = "You changed me from functions"
        },
        newTitle(new_title){
            this.title = new_title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app")