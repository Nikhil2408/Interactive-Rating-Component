const ratings = document.querySelectorAll("a.number");
const btn = document.getElementById("btn");

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

btn.addEventListener("click", function(){
    const displaySelectedRating = document.querySelector("#page-2 > .rating-component > #displayRating");
    displaySelectedRating.innerText = `You selected ${selectedRating} out of 5`;
    displaySelectedRating.classList.add("displayRating");
});

