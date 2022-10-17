// global variable decleration start here
const faqItem = document.querySelectorAll(".faq-item");
// global variable decleration end here
// accordion function start here
if (faqItem) {
    faqItem.forEach(function (ele, idx) {
        ele.addEventListener("click", function () {
            const active = document.querySelector(".active");
            if (ele.classList.contains("active")) {
                ele.classList.remove("active");
            } else {
                if (active) {
                    active.classList.remove("active");
                }
                ele.classList.add("active");
            }

        })
    })
}
// accordion function start here
