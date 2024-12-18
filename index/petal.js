        const products = [
            { name: 'Rose Bouquet', price: 'GHC 500', description: 'A beautiful bouquet of fresh roses.', image: "Rose Bouquet.jpg" },
            { name: 'Lily Vase', price: 'GHC 300', description: 'Elegant lilies in a decorative vase.', image: 'lily vase.jpg' },
            { name: 'Tulip Basket', price: 'GHC 700', description: 'Vibrant tulips arranged in a basket.', image: 'tulip basket.jpeg' },
            { name: 'Jasmin Flowers', price: 'GHC 250', description: 'A vase of fresh jasmines.', image: 'vase of jasmin flowers.jpeg' },
            { name: 'Lavender Bouquet', price: 'GHC 200', description: 'A beautiful bouquet of fresh lavender.', image: 'bouquet of lavender.jpeg' },
            { name: 'Basket of Sunflower', price: 'GHC 2500', description: 'A beautiful basket of fresh sunnies.', image: 'basket of sunflower.jpg'}
        ]
        const productList = document.getElementById('product-list');                                                                                    

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="showDetails('${product.name}', '${product.description}', '${product.price}', 'images/${product.image}')">View Details</button>
            `;
            productList.appendChild(productDiv);
        });

        function showDetails(name, description, price, image) {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                    <img src="${image}" alt="${name}">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <p><strong>Price:</strong> ${price}</p>
                </div>
            `;
            document.body.appendChild(modal);
        }