'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".dropdown-toggle");

    toggles.forEach(toggle => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = this.closest(".dropdown");
        parent.classList.toggle("open");

        // 他のメニューは閉じる
        document.querySelectorAll(".dropdown").forEach(item => {
          if (item !== parent) item.classList.remove("open");
        });
      });
    });

    // 外をクリックしたら閉じる
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(item => item.classList.remove("open"));
      }
    });
});