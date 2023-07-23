const categories = document.querySelectorAll("li.item")
console.log("Number of categories:", categories.length)

categories.forEach( category => {
const title = category.querySelector("h2")
const categoryListItems = category.querySelectorAll("li")
console.log("Category:",  title.textContent),
console.log("Elements:", categoryListItems.length);
})



