export const data = {
	html: `<h1 id="myHeader">My First CSS Example</h1>
<p>This is a paragraph.</p>`,

	css: `body {
    background-color: lightblue;
}

h1 {
    color: white;
    text-align: center;
}

p {
    font-family: verdana;
    font-size: 20px;
}`,

	js: `const myHeader = document.getElementById('myHeader');
myHeader.style.background = "red";`,
	react: `const App = () => {
            const [count, setCount] = React.useState(0); // Using useState hook

            const handleClick = () => {
                setCount(count + 1);
            };

            return (
                <div style={{textAlign: "center"}}>
                    <h1>Count: {count}</h1>
                    <button  onClick={handleClick}>Increment</button>
                </div>
            );
        };`,

	vue: `<div class="container-sm">

    <div id="app">
        <h1>{{ name }}</h1>
        <img v-bind:src="imgSrc" v-bind:alt="name" class="img-fluid">
        <p>{{description}}</p>
        <div>{{price}}</div>


        <section class="container">
            <div v-for="product in products" v-bind:key="product.id" id="display-list" class="row d-flex mb-3 align-items-center">
                <div class="col-sm-4">
                    <img class="img-fluid d-block" v-bind:src="product.image" v-bind:alt="product.name">
                </div>
                <div class="col">
                    <h3 class="text-info">{{product.name}}</h3>
                    <p class="mb-0">{{product.description}}</p>
                <div class="h5 float-right">{{product.price}}</div>     
                </div>
            </div>
        </section>

    </div>
  <script>
    
  
  Vue.createApp({
        data() {
            return {
                name: "Bamboo Thermal Ski Coat",
                description: "Youll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
                imgSrc: "https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg",
                price: 99,
                products : [
                    {
                        "id": "532",
                        "name": "Slicker Jacket",
                        "description": "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
                        "price": "125",
                        "image_title": "slicker-jacket_lynda_29941",
                        "image": "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg"
                    },
                    {
                        "id": "530",
                        "name": "Bamboo Thermal Ski Coat",
                        "description": "You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
                        "price": "99",
                        "image": "https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"
                    },
                    {
                        "id": "516",
                        "name": "Unisex Thermal Vest",
                        "description": "Our thermal vest, made from organic bamboo with recycled plastic down filling, is a favorite of both men and women. You'll help the environment, and have a wear-easy piece for many occasions.",
                        "price": "95",
                        "image": "https://hplussport.com/wp-content/uploads/2016/12/unisex-thermal-vest_LYNDA_29944.jpg"
                    }
                ]
            };
        },
        }).mount('#app');
  </script>

</div>`,

	angular: ``,
};
