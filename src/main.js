import "./styles/style.scss";
import { slideClickHandlers } from "./utils";

const pricingBoxes = document.querySelectorAll(".pricing__box");

pricingBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    pricingBoxes.forEach((box) => box.classList.remove("active"));
    pricingBoxes[index].classList.add("active");
  });
});

slideClickHandlers();
