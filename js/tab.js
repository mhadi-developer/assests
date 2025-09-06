document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs .nav-link");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();

      const target = document.querySelector(tab.dataset.tabTarget);

      // remove active from all
      tabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      // add active to clicked tab + its content
      tab.classList.add("active");
      if (target) target.classList.add("active");
    });
  });
});
