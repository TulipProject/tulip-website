document.querySelector("#read-more").addEventListener("click", 
function() {
    document.querySelector(".article-popup").classList.add("active");
});

document.querySelector(".article-popup .close-btn").addEventListener("click", 
function() {
    document.querySelector(".article-popup").classList.remove("active");
});
