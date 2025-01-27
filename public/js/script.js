let addBtn = document.getElementById("addIngredients");
let list = document.querySelector(".ingredientsList")
let div = document.querySelectorAll(".ingredientsDiv")[0];
addBtn.addEventListener('click',()=>{
    let newDiv = div.cloneNode(true);
    let input = newDiv.getElementsByTagName('input')[0];
    input.value = '';
    list.appendChild(newDiv);
})