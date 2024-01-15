// Sample recipe data
let recipes = [
    { title: 'Pasta Carbonara', ingredients: 'Spaghetti, eggs, bacon, Parmesan cheese, black pepper' },
    { title: 'Chocolate Chip Cookies', ingredients: 'Flour, sugar, butter, chocolate chips, baking soda' },
    // Add more recipes as needed
];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>${recipe.ingredients}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;

        recipeList.appendChild(recipeCard);
    });
}

// Function to add a new recipe
function addRecipe(title, ingredients) {
    recipes.push({ title, ingredients });
    displayRecipes();
}

// Function to edit a recipe
function editRecipe(index) {
    const newTitle = prompt('Enter the new title:');
    const newIngredients = prompt('Enter the new ingredients:');

    recipes[index] = { title: newTitle, ingredients: newIngredients };
    displayRecipes();
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Initial display of recipes
displayRecipes();
