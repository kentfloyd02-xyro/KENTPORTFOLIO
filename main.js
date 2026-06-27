const testimonials = [
  {
    name: "Tech Romel",
    role: "Rupal@20201",
    content:
      "Sobrang galing at maaasahan sa coding at problem solving, kaso kupal minsan pero solid pa rin.",
    image: "KentImage.png",
  },
  {
    name: "Tech Ronald",
    role: "Caloocan Boy",
    content:
      "Highly recommended talaga siya dahil mabilis gumawa ng solutions, kaso kupal pero funny naman.",
    image: "KentImage.png",
  },
  {
    name: "Tech Roland",
    role: "YoungStunna G",
    content:
      "Ang husay niya sa programming at design, may creativity at skills, kaso kupal lang minsan.",
    image: "KentImage.png",
  },
  {
    name: "Tech Floyd",
    role: "Chilli Garlic Supplier",
    content:
      "Malaki ang future nito sa tech industry dahil talented at masipag, kaso kupal lang talaga.",
    image: "KentImage.png",
  },
  {
    name: "Tech Gwen",
    role: "Founder Of Shembot",
    content:
      "Sayang kung hindi niya gagamitin ang skills niya kasi sobrang talented, kaso kupal pa rin.",
    image: "KentImage.png",
  },
];

const createTestimonialsCard = (testimonial) => {
  return `
        <div class="card">
            <div class="profile">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div>
                    <div class="name">${testimonial.name}</div>
                    <div class="role">${testimonial.role}</div>
                </div>
            </div>
            <div class="testimonial-text">${testimonial.content}</div>
        </div>
    `;
};

const populateColumn = (columnId) => {
  const column = document.getElementById(columnId);

  [...testimonials, ...testimonials].forEach((testimonial) => {
    column.innerHTML += createTestimonialsCard(testimonial);
  });
};

testimonials.sort(() => Math.random() - 0.5);
populateColumn("column1");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column2");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column3");

const menuToggle = document.querySelector(".menu-toggle");
const navButton = document.querySelector(".nav-button");
const navLinks = document.querySelectorAll(".nav-button a");

const closeNavigation = () => {
  navButton.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
};

const scrollToSectionCenter = (hash) => {
  const target = document.querySelector(hash);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });

  history.pushState(null, "", hash);
};

menuToggle.addEventListener("click", () => {
  const isOpen = navButton.classList.toggle("open");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeNavigation();
    scrollToSectionCenter(link.getAttribute("href"));
  });
});
