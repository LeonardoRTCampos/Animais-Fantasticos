export default function initAcordionList() {
  const tabAccordion = document.querySelectorAll("[data-anime='accordion'] dt");

  function ativaAcordion(index) {
    tabAccordion[index].classList.toggle("ativo");
    tabAccordion[index].nextElementSibling.classList.toggle("ativo");
  }

  tabAccordion.forEach((item, index) => {
    item.addEventListener("click", () => {
      ativaAcordion(index);
    });
  });
}
