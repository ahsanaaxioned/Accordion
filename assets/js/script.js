// global variable decleration start here
const faqItem = document.querySelectorAll(".faq-item");
// global variable decleration start here
// accordion function start here
faqItem.forEach(function (ele, idx) {
    ele.addEventListener("click", function (e) {
        for (let i=0; i<faqItem.length; i++) {
            if(idx != i) faqItem[i].classList.remove("active");
        }
        e.currentTarget.classList.toggle("active");
    });
})
// accordion function start here























