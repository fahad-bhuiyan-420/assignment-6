const cart = {};
let totalPrice = 0;
const treeContainer = document.getElementById('tree-container');

const loadAllTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(json => displayAllTrees(json.plants))
}
// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }
const loadSpecificTrees = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(json => displaySpecificTrees(json.plants))
}

const displaySpecificTrees = (plants) => {
    treeContainer.innerHTML = "";

    plants.forEach(plant => {
        const plantDiv = document.createElement('div');
        plantDiv.innerHTML = `
        <div class="bg-white max-w-[350px] p-4 space-y-2 rounded-[8px] mx-auto">
                    <img class="max-h-[190px] w-full object-cover" src="${plant.image}" alt="">
                    <h3 class="font-bold">${plant.name}</h3>
                    <p class="text-[#1F2937]">${plant.description} Its dense green</p>
                    <div class="flex justify-between ">
                        <p class="bg-[#DCFCE7] text-green-700 rounded-full p-2">${plant.category}</p>
                        <p class="font-semibold">৳${plant.price}</p>
                    </div>
                    <button onclick="loadYourCart('${plant.name}',${plant.price})" class="btn btn-primary rounded-full bg-[#15803D] text-white mr-4 w-full">Add to Cart</button>
                </div>        
        `
        treeContainer.append(plantDiv);
    })
}


const displayAllTrees = (trees) =>{

    
    treeContainer.innerHTML = ``;
    console.log(typeof trees);
    trees.forEach(tree => {
        const treeDiv = document.createElement('div');
        treeDiv.innerHTML = `
        <div class="bg-white max-w-[350px] p-4 space-y-2 rounded-[8px] mx-auto">
                    <img class="max-h-[190px] w-full object-cover" src="${tree.image}" alt="">
                    <h3 class="font-bold">${tree.name}</h3>
                    <p class="text-[#1F2937]">${tree.description} Its dense green</p>
                    <div class="flex justify-between ">
                        <p class="bg-[#DCFCE7] text-green-700 rounded-full p-2">${tree.category}</p>
                        <p class="font-semibold">৳${tree.price}</p>
                    </div>
                    <button onclick="loadYourCart('${tree.name}',${tree.price})" class="btn btn-primary rounded-full bg-[#15803D] text-white mr-4 w-full">Add to Cart</button>
                </div>
        `

        treeContainer.append(treeDiv);
    });

    
}

const loadYourCart = (name, price) => {
    totalPrice = totalPrice + price;

    if (cart[name]){

        cart[name] += 1;
        const cartItem = document.getElementById(name);
        cartItem.innerText = `৳${price} x ${cart[name]}`
        console.log(cartItem);
    } 

    else{
        cart[name] = 1;
        const cartContainer = document.getElementById('cart-container');
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
                
                <div id="${name}-container" class="flex justify-between bg-[#DCFCE7] p-2 rounded-[8px]">
                    <div>
                        <h3 class="font-semibold">${name}</h3>
                        <p id="${name}">৳${price} x 1</p>
                    </div>
                    <div>
                        <button onclick="loadCartContainer('${name}', ${price})" class="btn bg-[#DCFCE7] border-0"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                
        `
        

        cartContainer.append(cartItem);
    }
    document.getElementById('price-tag').innerText = `৳${totalPrice}`
}


const loadCartContainer = (name, price) => {
    const deleteCart = document.getElementById(`${name}-container`);
    deleteCart.remove();

    count = cart[name];
    delete cart[name];
    totalPrice -= count*price;
    document.getElementById('price-tag').innerText = `৳${totalPrice}`

}


// const allTreesBtn = ''

// loadAllTrees();