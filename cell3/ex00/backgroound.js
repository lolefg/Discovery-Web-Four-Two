const btn=document.getElementById("button");
btn.addEventListener("click", function(){
    btn.parentElement.classList.toggle("red");
})