export default function initTabNav() {
  const tabanimais = document.querySelectorAll('[data-tab="menu"] li');
  const tabdescricao = document.querySelectorAll(
    '[data-tab="content"] section'
  );

  if (tabanimais.length && tabdescricao.length) {
    function ativaSecao(index) {
      tabdescricao.forEach(function (section) {
        section.classList.remove("ativo");
      });
      const direcao = tabdescricao[index].dataset.anime;
      tabdescricao[index].classList.add("ativo", direcao);
    }

    tabanimais.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        ativaSecao(index);
      });
    });
  }
}
