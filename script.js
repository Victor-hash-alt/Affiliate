const faq = document.querySelectorAll(".accordion-item");

// faq.forEach((faq) => {
//     faq.addEventListener("click" function() {}
// });
faq.forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("showFaq");
  });
});
