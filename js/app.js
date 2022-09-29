let elForm = document.querySelector(".site__form");
let elFoodName = document.querySelector(".food__name");
let elFoodCost = document.querySelector(".food__cost");
let elFoodImg = document.querySelector(".food__img-link");
let elFoodRestorant = document.querySelector(".food__restorant");
let elFoodSheef = document.querySelector(".food__sheef");
let box = document.querySelector("#section__box")

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let elBox = document.createElement("div");
    console.log(elBox);
    elBox.className = "card"
    box.appendChild(elBox) 
    
    let elTextBox = document.createElement("div");
    elTextBox.className = "text__box";
    elBox.appendChild (elTextBox)
    let texts1 = document.createElement("strong");
    let texts2 = document.createElement("strong");
    let texts3 = document.createElement("strong");
    
    texts1.innerHTML = elFoodName.value;
    texts2.innerHTML = elFoodCost.value;
    texts3.innerHTML = elFoodRestorant.value;
    
    
    elTextBox.appendChild(texts1);
    elTextBox.appendChild(texts2);
    elTextBox.appendChild(texts3);
    
    
    
    let elButtons = document.createElement("div");
    elButtons.className = "buttons";
    elBox.appendChild(elButtons)
    
    let button = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    
    elButtons.appendChild(button);
    elButtons.appendChild(button2);
    elButtons.appendChild(button3);
    
    button.innerHTML = "delete";
    button2.innerHTML = "5.00";
    button3.innerHTML = "tamom tugadi"
    
    button.className = "delete";
    button2.classList = "time"
    button3.classList = "end"
    
    
    button3.addEventListener("click", () => {
        elBox.style.backgroundColor = "#c9f4a7";
    })

    button.addEventListener("click", () => {
        elBox.remove()
    })
    
    
    let elImage = document.createElement("img");
    elBox.appendChild = (elImage);
    let imgLink = elFoodImg.value
    elImage.src = imgLink;
    elBox.prepend(elImage);
    elImage.className = "size"
    
    let elText = document.createElement("p");
    elTextBox.appendChild(elText)
    elBox.appendChild(elTextBox)
    
    // button2.document.getElementById('demo').innerHTML=Date();
}) 
