export default function initAcordionList() {
  const tabAccordion = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";

  function ativaAcordion(index) {
    tabAccordion[index].classList.toggle(activeClass);
    tabAccordion[index].nextElementSibling.classList.toggle(activeClass);
  }

  tabAccordion.forEach((item, index) => {
    item.addEventListener("click", () => {
      ativaAcordion(index);
    });
  });
}
