const loadPage = function () {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    content.appendChild(headerContainer);
    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Menu';
    headerContainer.appendChild(mainHeading);

    for (let i = 0; i < 3; i++){
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
        content.appendChild(menuContainer);
        const menuItemHeading = document.createElement('h2');
        const ingredients = document.createElement('p');
        ingredients.classList.add('ingredients');
        switch(i){
            case 0:
                    menuItemHeading.textContent = "Strawberry Milkshake";
                    ingredients.textContent = "Strawberries, Strawberry Ice Cream, Frozen Yoghurt, Milk";
                    break;
            case 1:
                    menuItemHeading.textContent = "Vanilla Milkshake";
                    ingredients.textContent = "Vanilla Ice Cream, Vanilla Extract, Frozen Yoghurt, Milk";
                    break;
            case 2:
                    menuItemHeading.textContent = "Chocolate Milkshake";
                    ingredients.textContent = "Chocolate Ice Cream, Chocolate, Frozen Yoghurt, Milk";
                    break;
        }
        menuContainer.appendChild(menuItemHeading);
        const priceHeading = document.createElement('h3');
        priceHeading.classList.add('price-heading');
        priceHeading.textContent = "Price:";
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = "$4";
        const ingredientsHeading = document.createElement('h3');
        ingredientsHeading.classList.add('ingredients-heading');
        ingredientsHeading.textContent = "Ingredients:";
        menuContainer.appendChild(priceHeading);
        menuContainer.appendChild(price);
        menuContainer.appendChild(ingredientsHeading);
        menuContainer.appendChild(ingredients);
    }
};
export {loadPage as loadMenuPage};