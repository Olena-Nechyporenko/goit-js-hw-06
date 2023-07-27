const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

categories.forEach( category => {
const titleOfCategory = category.querySelector("h2");
const categoryListItems = category.querySelectorAll("li");
console.log("Category:",  titleOfCategory.textContent);
console.log("Elements:", categoryListItems.length);
})


//  ІНШИЙ ВАРІАНТ РОЗВ'ЯЗКУ

// const categories = document.querySelector("#categories");
// console.log("Number of categories:", categories.children.length);

// [...categories.children].forEach(category => {
//     console.log("Category:", category.firstElementChild.textContent);
//     console.log("Elements:", category.lastElementChild.children.length);
// })


