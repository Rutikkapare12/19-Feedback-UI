const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEls) =>{
    ratingEls.addEventListener("click", (event)=>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add('active');
    });
});

btnEl.addEventListener("click", ()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you!<strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        <botton class="btn-reload" id="btn-reload">Go back</botton>
        `
        const btn_reload = document.getElementById("btn-reload");
        btn_reload.addEventListener("click", () => {
          location.reload();
        });
    }
});

function removeActive(){
    ratingEls.forEach((ratingEls) =>{
        ratingEls.classList.remove("active");
});
}


