const app = Vue.createApp({
    data(){
        return {
            url : "https://www.facebook.com/",
            title : 'The final empire',
            author : 'Sajan Khadka',
            age : 22,
            showBooks : true,
            x:0,
            y:0,
            books: [
                { title: "name of the wind", author:'patric rothfus', img:'assets/1.jpg', isFav: true },
                { title: "the widower", author:'patricial lopez', img:'assets/2.jpg', isFav: false },
                { title: "eye of the tiger", author:'antartica holland', img:'assets/3.jpg', isFav: true },
            ]
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
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(e, e.type, data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book)=> book.isFav)
        }
    }
})

app.mount("#app")