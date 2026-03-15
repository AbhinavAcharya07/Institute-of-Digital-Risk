const hamburger = document.getElementById("hamburger");
      const mobileMenu = document.getElementById("mobile-menu");
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");
      });
      document.querySelectorAll(".mobile-link").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("open");
          mobileMenu.classList.remove("open");
        });
      });
      const revealEls = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealEls.forEach((el) => observer.observe(el));
      window.addEventListener("scroll", () => {
        const nav = document.getElementById("main-nav");
        nav.style.borderBottomColor =
          window.scrollY > 10 ? "rgba(255,92,0,0.25)" : "var(--border)";
      });
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const btn = this.querySelector(".btn-submit");
          const status = document.getElementById("form-status");
          btn.textContent = "Sending…";
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = "✓ Message Sent";
            btn.style.background = "#22c55e";
            status.innerHTML = "Thank you — we'll be in touch soon.";
            status.style.color = "#22c55e";
          }, 1000);
        });