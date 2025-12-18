// ...existing code...
document.addEventListener("DOMContentLoaded", () => {
  // ===== Smooth scroll for nav links =====
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href") || "";
    // Only intercept hash links (same-page)
    if (href.startsWith("#")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        // Close mobile menu after clicking a link
        document.querySelector(".nav-links").classList.remove("active");
      });
    }
    // non-hash links are left alone so navigation to other pages works
  });

  // ===== Hero Button Shortcut =====
  const talkBtn = document.getElementById("talkBtn");
  if (talkBtn) {
    talkBtn.addEventListener("click", () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
// ...existing code...

// ===== Mobile menu toggle =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// guard existence before attaching listener
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
// ...existing code...