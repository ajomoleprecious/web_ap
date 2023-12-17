const review_name = document.getElementById("review_name");
const unknownBox = document.getElementById("unknown");
const review_score = document.getElementById("review_score");
const review_text = document.getElementById("review_text");
const review_form = document.getElementById("review_form");
const label_score = document.getElementById("label_score");
let detail__reviews = document.querySelector(".detail__reviews");

unknownBox.addEventListener("click", () => {
    if (unknownBox.checked) {
        review_name.value = "Unknown";
        review_name.classList.toggle("disabled");
    }
    else{
        review_name.classList.toggle("disabled");
        review_name.value = "";
    }
});

review_score.addEventListener("mousemove", () => {
    label_score.innerHTML = `${review_score.value}`;
});

function addReview() {
    review_form.onsubmit = (e) => {
        e.preventDefault();
    };

    let review = {
        name: review_name.value,
        score: review_score.value,
        text: review_text.value,
    };

    if(review.name == "" || review.text == ""){
        alert("Vul alle velden in!");
        return;
    }
    
    // Add the review in the detail_reviews section
    let section = document.createElement("section");
    let p = document.createElement("p");
    p.classList.add("user");
    p.innerHTML = review.name;
    let starSection = document.createElement("section");
    for (let i = 0; i < 5; i++) {
       if ( i < review.score) {
            let span = document.createElement("span");
            span.classList.add("fa");
            span.classList.add("fa-star");
            span.classList.add("checked");
            starSection.appendChild(span);
       }
         else{
            let span = document.createElement("span");
            span.classList.add("fa");
            span.classList.add("fa-star");
            starSection.appendChild(span);         
        }
    }
    let q = document.createElement("q");
    q.classList.add("comment");
    q.innerHTML = review.text;
    section.appendChild(p);
    section.appendChild(starSection);
    section.appendChild(q);
    detail__reviews.appendChild(section);
}