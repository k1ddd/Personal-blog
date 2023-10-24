const modalBtn = document.querySelectorAll("[data-modal]");

modalBtn.forEach((item) => {
  item.addEventListener("click", (ev) => {
    let $this = ev.currentTarget;
    let modalId = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);

    modal.classList.add("#show");
  });
});
