export default function initTabNav() {
  const tabanimais = document.querySelectorAll('[data-tab="menu"] li');
  const tabdescricao = document.querySelectorAll(
    '[data-tab="content"] section'
  );

  function ativaSecao(index) {
    tabdescricao.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabdescricao[index].dataset.anime;
    tabdescricao[index].classList.add("ativo", direcao);
  }

  if (tabanimais.length && tabdescricao.length) {
    tabanimais.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        ativaSecao(index);
      });
    });
  }
}
