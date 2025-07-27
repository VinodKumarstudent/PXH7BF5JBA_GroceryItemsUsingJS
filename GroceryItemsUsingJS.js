let bg = document.createElement("div");
bg.classList.add("bg-container");
document.body.appendChild(bg);
let heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent = "Grocery List";
bg.appendChild(heading);
let listContianer = document.createElement("ul");
listContianer.classList.add("list-container");
bg.appendChild(listContianer);
let GroceryList = ["Milk", "penut Butter", "choco chips", "tomoto sos", "cup cakes", "noodles"];
for (let each of GroceryList) {
    let listElement = document.createElement("li");
    listElement.textContent = each;
    listContianer.appendChild(listElement);
}
let checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.id = "deliveryMode";
bg.appendChild(checkBox);
let label = document.createElement("label");
label.setAttribute("for", "deliveryMode");
label.textContent = "Need Home Delivery";
label.classList.add("delivery-test");
bg.appendChild(label);
let Break = document.createElement("br");
bg.appendChild(Break);
let button = document.createElement("button")
button.classList.add("btn", "btn-primary");
button.textContent = "procced to pay";
bg.appendChild(button);