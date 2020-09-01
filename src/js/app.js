import '../scss/app.scss';


// Your JS Code goes here


let product1 = {
    name: 'Name 1',
    category: ['category A', 'category B', 'category C'],
    price: 50.00,
    img: 'images/content/camera1.jpg',

};

let product2 = {
    name: 'Name 2',
    category: ['category D', 'category E', 'category F'],
    price: 100.00,
    img: 'images/content/hats2.jpg',

};

let product3 = {
    name: 'Name 3',
    category: ['category A', 'category C', 'category E'],
    price: 80.00,
    img: 'images/content/shoes3.jpg',

};

let product4 = {
    name: 'Name 4',
    category: ['category B', 'category C', 'category F'],
    price: 120.00,
    img: 'images/content/brushes4.jpg',

};

let product5 = {
    name: 'Name 5',
    category: ['category C', 'category D', 'category E'],
    price: 160.00,
    img: 'images/content/headphones5.jpg',

};


let vm = new Vue({
    el: "#app",
    data: {
        message: "hello",
        hidden: false,
        
        products: [product1, product2, product3, product4, product5],

        product:{
            name:"",
            category:[],
            price:"",
            img: 'images/content/no-camera.png',
        },
        
    },

    methods: {

        addProduct(){

            this.product.category.sort(),

            this.products.push({
                name: this.product.name,
                category: this.product.category,
                price: this.product.price,
                img: this.product.img,
            })
            this.product.name= "",
            this.product.category=[],
            this.product.price= "",
            this.hidden = false,


            console.log(this.products) ,
            console.log(this.category)    
        }   

    }
})

