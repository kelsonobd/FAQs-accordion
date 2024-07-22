document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
  
    items.forEach(item => {
      const plusIcon = item.querySelector(".plus");
      const minusIcon = item.querySelector(".minus");
      const paragraph = item.querySelector("p");
  
      plusIcon.addEventListener("click", () => {
        paragraph.style.visibility = "visible";
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline";
      });
  
      minusIcon.addEventListener("click", () => {
        paragraph.style.visibility = "hidden";
        minusIcon.style.display = "none";
        plusIcon.style.display = "inline";
      });
    });
  });
  