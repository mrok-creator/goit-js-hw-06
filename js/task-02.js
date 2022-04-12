const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients');
function createIngredientEl(item) {
  const ingredientItemEl = document.createElement('li');

  ingredientItemEl.classList.add('ingredients__item');
  ingredientItemEl.textContent = item;

  return ingredientItemEl;
}

const listOfIngredientItemEl = ingredients.map(createIngredientEl);

ingredientsListEl.append(...listOfIngredientItemEl);
