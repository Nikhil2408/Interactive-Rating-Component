const ratings = document.querySelectorAll("a.number");

let selectedRating = 0;
for(let rating of ratings){
    rating.addEventListener("click", function(){
        for(let rating of ratings)
        {
            rating.classList.remove("selected");
            this.classList.add("selected");
            selectedRating = parseInt(this.innerText);
        }
    });   
}


const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    const displaySelectedRating = document.createElement("p");
    displaySelectedRating.innerText = `You selected ${selectedRating} out of 5`;
    displaySelectedRating.classList.add("displayRating");
    const tqHeading = document.querySelector("#tq-heading");
    tqHeading.insertAdjacentElement("beforebegin", displaySelectedRating);
});

