const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const elem1 = document.createElement("li");
elem1.textContent = ingredients[0];
elem1.classList.add("item");

const elem2 = document.createElement("li");
elem2.textContent = ingredients[1];
elem2.classList.add("item");

const elem3 = document.createElement("li");
elem3.textContent = ingredients[2];
elem3.classList.add("item");

const elem4 = document.createElement("li");
elem4.textContent = ingredients[3];
elem4.classList.add("item");

const elem5 = document.createElement("li");
elem5.textContent = ingredients[4];
elem5.classList.add("item");

const elem6 = document.createElement("li");
elem6.textContent = ingredients[5];
elem6.classList.add("item");

list.append(elem1, elem2, elem3, elem4, elem5, elem6);
