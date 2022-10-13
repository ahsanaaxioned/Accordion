// global variable decleration start here
const faqItem = document.querySelectorAll(".faq-item");
const answer = document.querySelectorAll(".answer");
const close = document.querySelectorAll(".close");
// global variable decleration start here
// accordion function start here
faqItem.forEach(function(ele,idx){
    ele.addEventListener("click",function(){
        ele.classList.toggle("active");
    })
})
// accordion function start here























